import Activites from '../components/Activites';
import ActivityTitle from '../components/ActivityTitle';
import AddButton from '../components/AddButton';
import EmptyStateImage from '../components/EmptyStateImage';
import ModalDelete from '../components/ModalDelete';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchActivities,
	setShowModalDelete,
} from '../features/activity/activitySlice';
import {
	addActivityApi,
	deleteActivityApi,
} from '../features/activity/actions';
import { useEffect } from 'react';

const Dashboard = () => {
	const { activities, activity, showModalDelete } = useSelector(
		(state) => state.activity
	);
	const dispatch = useDispatch();

	const handleOnAdd = async () => {
		console.log('trigerr add');
		try {
			await addActivityApi({
				title: 'New Activity',
				email: 'fauzandprasetyo@gmail.com',
			});
			dispatch(fetchActivities());
		} catch (error) {
			console.log(error);
		}
	};

	const handleOnDelete = async () => {
		try {
			await deleteActivityApi(activity.id);
			dispatch(setShowModalDelete());
			dispatch(fetchActivities());
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		dispatch(fetchActivities());
	}, []);

	return (
		<div
			className={`px-56 min-h-screen pt-32 relative ${
				showModalDelete ? 'h-screen overflow-hidden' : ''
			}`}
		>
			<div className="flex justify-between w-full mb-12">
				<ActivityTitle />
				<AddButton onClick={handleOnAdd} />
			</div>

			{activities.length ? (
				<Activites />
			) : (
				<EmptyStateImage
					dataCy={'activity-empty-state'}
					imageUrl={'/icons/activity-empty-state.svg'}
				/>
			)}

			<div className={showModalDelete ? '' : 'hidden'}>
				<ModalDelete
					onClickCancel={() => dispatch(setShowModalDelete())}
					onClickDelete={handleOnDelete}
					question={'Apakah anda yakin menghapus activity'}
					item={`“${activity.title}”?`}
				/>
			</div>
		</div>
	);
};

export default Dashboard;

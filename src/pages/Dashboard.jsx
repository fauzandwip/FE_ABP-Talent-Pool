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
import { addActivityApi } from '../features/activity/actions';

const Dashboard = () => {
	const { activities, showModalDelete } = useSelector(
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
					question={'Apakah anda yakin menghapus activity'}
					item={'“Meeting dengan Client”?'}
				/>
			</div>
		</div>
	);
};

export default Dashboard;

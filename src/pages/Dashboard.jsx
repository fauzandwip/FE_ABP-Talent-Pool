import Activites from '../components/Activites';
import ActivityTitle from '../components/ActivityTitle';
import AddButton from '../components/AddButton';
import EmptyStateImage from '../components/EmptyStateImage';
import ModalDelete from '../components/ModalDelete';
import { useSelector, useDispatch } from 'react-redux';
import { setShowModalDelete } from '../features/activity/activitySlice';

const Dashboard = () => {
	const showModalDelete = useSelector(
		(state) => state.activity.showModalDelete
	);
	const dispatch = useDispatch();

	return (
		<div
			className={`px-56 min-h-screen pt-32 relative ${
				showModalDelete ? 'h-screen overflow-hidden' : ''
			}`}
		>
			<div className="flex justify-between w-full mb-12">
				<ActivityTitle />
				<AddButton />
			</div>

			{/* <EmptyStateImage
				dataCy={'activity-empty-state'}
				imageUrl={'/icons/activity-empty-state.svg'}
			/> */}
			<Activites />

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

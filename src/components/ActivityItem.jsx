import { setShowModalDelete } from '../features/activity/activitySlice';
import DeleteButton from './icons/DeleteButton';
import { useDispatch } from 'react-redux';

const ActivityItem = () => {
	const dispatch = useDispatch();

	return (
		<div
			data-cy="activity-item-index"
			className=" aspect-square rounded-xl shadow-xl bg-white flex flex-col justify-between p-6"
		>
			<h6 data-cy="activity-item-title" className="text-lg font-bold">
				Activity Item
			</h6>

			<div className="flex justify-between">
				<p data-cy="activity-item-date" className="text-gray-primary">
					5 Oktober 2021
				</p>
				<DeleteButton onClick={() => dispatch(setShowModalDelete())} />
			</div>
		</div>
	);
};

export default ActivityItem;

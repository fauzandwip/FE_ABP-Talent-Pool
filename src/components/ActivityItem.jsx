import { setShowModalDelete } from '../features/activity/activitySlice';
import DeleteButton from './icons/DeleteButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const ActivityItem = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onClickItem = () => navigate('/detail');
	const onClickDelete = (e) => {
		e.stopPropagation();
		dispatch(setShowModalDelete());
	};

	return (
		<div
			onClick={onClickItem}
			data-cy="activity-item-index"
			className=" aspect-square rounded-xl shadow-xl bg-white flex flex-col justify-between p-6 cursor-pointer"
		>
			<h6 data-cy="activity-item-title" className="text-lg font-bold">
				Activity Item
			</h6>

			<div className="flex justify-between">
				<p data-cy="activity-item-date" className="text-gray-primary">
					5 Oktober 2021
				</p>
				<DeleteButton onClick={onClickDelete} />
			</div>
		</div>
	);
};

export default ActivityItem;

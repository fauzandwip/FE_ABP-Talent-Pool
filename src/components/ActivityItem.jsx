import {
	setActivity,
	setShowModalDelete,
} from '../features/activity/activitySlice';
import DeleteButton from './icons/DeleteButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ActivityItem = ({ data }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onClickItem = () => navigate('/detail');
	const onClickDelete = (e) => {
		e.stopPropagation();
		dispatch(setShowModalDelete());
		dispatch(setActivity(data));
	};

	const convertDate = (stringDate) => {
		const date = new Date(stringDate);
		const options = {
			day: '2-digit',
			month: 'long',
			year: 'numeric',
		};

		const newFormatDate = date.toLocaleDateString('id-ID', options);
		return newFormatDate;
	};

	return (
		<div
			onClick={onClickItem}
			data-cy="activity-item-index"
			className=" aspect-square rounded-xl shadow-xl bg-white flex flex-col justify-between p-6 cursor-pointer"
		>
			<h6 data-cy="activity-item-title" className="text-lg font-bold">
				{data.title}
			</h6>

			<div className="flex justify-between">
				<p data-cy="activity-item-date" className="text-gray-primary">
					{convertDate(data.created_at)}
				</p>
				<DeleteButton onClick={onClickDelete} />
			</div>
		</div>
	);
};

export default ActivityItem;

ActivityItem.propTypes = {
	data: PropTypes.object,
};

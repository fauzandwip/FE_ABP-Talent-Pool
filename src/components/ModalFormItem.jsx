import { useState } from 'react';
import SaveButton from './SaveButton';
import SelectPriority from './SelectPriority';
import PropTypes from 'prop-types';
import { addTodoApi } from '../features/todo/actions';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchDetailActivity,
	setShowModalAdd,
} from '../features/todo/todoSlice';

const ModalFormItem = ({ onClickClose }) => {
	const dispatch = useDispatch();
	const { detailActivity } = useSelector((state) => state.todo);

	const [title, setTitle] = useState('');
	const [priority, setPriority] = useState({
		priority: '',
		index: null,
	});

	const handleOnSave = async () => {
		try {
			// console.log({
			// 	title,
			// 	priority: priority.priority,
			// 	activity_group_id: detailActivity.id,
			// });

			await addTodoApi({
				title,
				priority: priority.priority,
				activity_group_id: detailActivity.id,
			});

			setPriority({
				priority: '',
				index: null,
			});
			dispatch(fetchDetailActivity(detailActivity.id));
			dispatch(setShowModalAdd());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="w-full h-screen absolute z-50 bg-gray-800/70 flex justify-center items-center top-0 left-0">
			<div
				data-cy="modal-add"
				className="w-7/12 h-max bg-white flex flex-col rounded-xl shadow-lg"
			>
				<div className="flex justify-between px-7 py-6">
					<h5 data-cy="modal-add-title" className=" text-lg font-semibold">
						Tambah List Item
					</h5>
					<button data-cy="modal-add-close-button" onClick={onClickClose}>
						<img
							src="/icons/modal-add-close-button.svg"
							className="  w-6 h-6"
						/>
					</button>
				</div>

				<div className="flex flex-col px-8 py-6 gap-6 border-y border-gray-secondary">
					<label
						htmlFor=""
						data-cy="modal-add-name-title"
						className=" text-xs font-semibold flex flex-col gap-2"
					>
						NAMA LIST ITEM
						<input
							data-cy="modal-add-name-input"
							type="text"
							name=""
							id=""
							placeholder="Tambahkan nama list item"
							className=" text-base font-normal placeholder:text-gray-secondary px-5 py-4 border border-gray-secondary rounded-md focus:outline focus:outline-1 focus:outline-blue-primary"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<SelectPriority priority={priority} setPriority={setPriority} />
				</div>

				<div className={`flex justify-end items-center px-8 py-4`}>
					<SaveButton
						onClick={handleOnSave}
						isDisabled={!(title && priority.priority)}
					/>
				</div>
			</div>
		</div>
	);
};

export default ModalFormItem;

ModalFormItem.propTypes = {
	onClickClose: PropTypes.func,
};

import {
	fetchDetailActivity,
	setCurrentTodo,
	setShowModalDelete,
	setShowModalEdit,
} from '../features/todo/todoSlice';
import DeleteButton from './icons/DeleteButton';
import EditButton from './icons/EditButton';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateTodoApi } from '../features/todo/actions';
import { useParams } from 'react-router-dom';

const Todo = ({ data }) => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const priorities = {
		'very-high': 'bg-red-500',
		high: 'bg-yellow-500',
		normal: 'bg-teal-600',
		low: 'bg-blue-500',
		'very-low': 'bg-purple-600',
	};
	const [isActive, setIsActive] = useState(data.is_active);

	const handleOnChangeActive = async () => {
		try {
			isActive ? setIsActive(0) : setIsActive(1);

			await updateTodoApi(data.id, {
				title: data.title,
				priority: data.priority,
				is_active: isActive ? 0 : 1,
			});
			dispatch(fetchDetailActivity(id));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			data-cy="todo-item-index"
			className="w-full flex justify-between p-7 bg-white rounded-xl shadow-xl"
		>
			<div className="flex gap-4 items-center">
				<input
					data-cy="todo-item-checkbox"
					type="checkbox"
					name=""
					id=""
					className="w-5 h-5 aspect-square accent-blue-500"
					checked={isActive ? '' : 'checked'}
					onChange={handleOnChangeActive}
				/>
				<div
					className={`aspect-square w-3 h-3 rounded-full ${
						priorities[data.priority]
					}`}
				/>
				<p
					data-cy="todo-item-priority-indicator"
					className={`text-lg font-medium ${
						!isActive && 'line-through text-gray-primary'
					}`}
				>
					{data.title}
				</p>
				<EditButton
					onClick={() => {
						dispatch(setCurrentTodo(data));
						dispatch(setShowModalEdit());
					}}
					data-cy={'todo-item-edit-button"'}
					className="w-5 h-5"
				/>
			</div>

			<DeleteButton
				onClick={() => {
					dispatch(setCurrentTodo(data));
					dispatch(setShowModalDelete());
				}}
			/>
		</div>
	);
};

export default Todo;

Todo.propTypes = {
	data: PropTypes.object,
};

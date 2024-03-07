import {
	setShowModalDelete,
	setShowModalEdit,
} from '../features/todo/todoSlice';
import DeleteButton from './icons/DeleteButton';
import EditButton from './icons/EditButton';
import { useDispatch } from 'react-redux';
const Todo = () => {
	const dispatch = useDispatch();

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
				/>
				<div className=" aspect-square w-3 h-3 bg-red-500 rounded-full" />
				<p
					data-cy="todo-item-priority-indicator"
					className="text-lg font-medium"
				>
					Todo
				</p>
				<EditButton
					onClick={() => dispatch(setShowModalEdit())}
					data-cy={'todo-item-edit-button"'}
					className="w-5 h-5"
				/>
			</div>

			<DeleteButton onClick={() => dispatch(setShowModalDelete())} />
		</div>
	);
};

export default Todo;

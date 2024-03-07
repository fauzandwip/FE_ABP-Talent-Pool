import DeleteButton from './icons/DeleteButton';
import EditButton from './icons/EditButton';

const Todo = () => {
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
					dataCy={'todo-item-edit-button"'}
					className=" aspect-square w-5"
				/>
			</div>

			<DeleteButton />
		</div>
	);
};

export default Todo;

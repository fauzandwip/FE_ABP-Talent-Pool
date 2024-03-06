import DeleteButton from './icons/DeleteButton';
import EditButton from './icons/EditButton';

const Todo = () => {
	return (
		<div className="w-full flex justify-between p-7 bg-white rounded-xl shadow-xl">
			<div className="flex gap-4 items-center">
				<input
					type="checkbox"
					name=""
					id=""
					className="w-5 h-5 aspect-square accent-blue-500"
				/>
				<div className=" aspect-square w-2 h-2 bg-red-500 rounded-full" />
				<p className="text-lg font-medium">Todo</p>
				<EditButton className=" aspect-square w-5" />
			</div>

			<DeleteButton />
		</div>
	);
};

export default Todo;

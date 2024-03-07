import EditButton from './icons/EditButton';
import { useNavigate } from 'react-router-dom';

const TodoTitle = () => {
	const navigate = useNavigate();

	return (
		<div className="flex gap-4 items-center">
			<button onClick={() => navigate('/')}>
				<img
					data-cy="todo-back-button"
					src="./icons/todo-back-button.svg"
					className="  w-8 h-8"
				/>
			</button>

			<h1 data-cy="todo-title" className="text-4xl font-bold">
				New Activity
			</h1>
			<EditButton data-cy={'todo-title-edit-button"'} className="w-6 h-6 " />
		</div>
	);
};

export default TodoTitle;

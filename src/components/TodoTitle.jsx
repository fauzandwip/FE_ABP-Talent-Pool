import EditButton from './icons/EditButton';
import { useNavigate } from 'react-router-dom';

const TodoTitle = () => {
	const navigate = useNavigate();

	return (
		<div className="flex gap-4 items-center">
			<button onClick={() => navigate('/')}>
				<object
					data-cy="todo-back-button"
					data="./icons/todo-back-button.svg"
					className=" pointer-events-none w-8 h-8"
				/>
			</button>

			<h1 data-cy="todo-title" className="text-4xl font-bold">
				New Activity
			</h1>
			<EditButton
				dataCy={'todo-title-edit-button"'}
				className="w-6 h-6 pointer-events-none"
			/>
		</div>
	);
};

export default TodoTitle;

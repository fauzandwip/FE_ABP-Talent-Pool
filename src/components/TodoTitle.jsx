import EditButton from './icons/EditButton';

const TodoTitle = () => {
	return (
		<h1
			data-cy="activity-title"
			className="text-4xl font-bold flex gap-4 items-center"
		>
			<object data-cy="todo-back-button" data="./icons/todo-back-button.svg" />
			New Activity
			<EditButton />
		</h1>
	);
};

export default TodoTitle;

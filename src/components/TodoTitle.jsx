import EditButton from './icons/EditButton';

const TodoTitle = () => {
	return (
		<div className="flex gap-4 items-center">
			<object data-cy="todo-back-button" data="./icons/todo-back-button.svg" />
			<h1 data-cy="todo-title" className="text-4xl font-bold">
				New Activity
			</h1>
			<EditButton dataCy={'todo-title-edit-button"'} />
		</div>
	);
};

export default TodoTitle;

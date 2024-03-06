const TodoTitle = () => {
	return (
		<h1
			data-cy="activity-title"
			className="text-4xl font-bold flex gap-4 items-center"
		>
			<object data-cy="todo-back-button" data="./icons/todo-back-button.svg" />
			New Activity
			<object
				data-cy="todo-title-edit-button"
				data="./icons/todo-title-edit-button.svg"
			/>
		</h1>
	);
};

export default TodoTitle;

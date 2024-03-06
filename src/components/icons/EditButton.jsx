const EditButton = ({ ...props }) => {
	return (
		<button>
			<object
				{...props}
				data-cy="todo-title-edit-button"
				data="./icons/todo-title-edit-button.svg"
				className="pointer-events-none"
			/>
		</button>
	);
};

export default EditButton;

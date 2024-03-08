const EditButton = ({ ...props }) => {
	return (
		<button {...props}>
			<img src="/icons/todo-title-edit-button.svg" />
		</button>
	);
};

export default EditButton;

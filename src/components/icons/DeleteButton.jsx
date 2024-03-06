const DeleteButton = ({ ...props }) => {
	return (
		<button>
			<object
				{...props}
				data-cy="activity-item-delete-button"
				data="./icons/trash.svg"
				className="pointer-events-none"
			/>
		</button>
	);
};

export default DeleteButton;

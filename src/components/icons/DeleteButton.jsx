import PropTypes from 'prop-types';

const DeleteButton = ({ onClick, ...props }) => {
	return (
		<button onClick={onClick}>
			<img
				{...props}
				data-cy="activity-item-delete-button"
				src="/icons/trash.svg"
				className=" w-6 h-6"
			/>
		</button>
	);
};

export default DeleteButton;

DeleteButton.propTypes = {
	onClick: PropTypes.func,
};

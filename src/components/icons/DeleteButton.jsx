import PropTypes from 'prop-types';

const DeleteButton = ({ onClick, ...props }) => {
	return (
		<button onClick={onClick}>
			<object
				{...props}
				data-cy="activity-item-delete-button"
				data="./icons/trash.svg"
				className="pointer-events-none w-6 h-6"
			/>
		</button>
	);
};

export default DeleteButton;

DeleteButton.propTypes = {
	onClick: PropTypes.func,
};

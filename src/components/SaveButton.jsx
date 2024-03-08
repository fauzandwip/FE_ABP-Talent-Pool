import PropTypes from 'prop-types';

const SaveButton = ({ onClick, isDisabled }) => {
	return (
		<button
			onClick={onClick}
			data-cy="modal-add-save-button"
			className={`bg-blue-primary text-white rounded-full text-lg font-semibold px-10 py-3 ${
				isDisabled && 'bg-blue-300'
			}`}
			disabled={isDisabled ? 'disabled' : ''}
		>
			Simpan
		</button>
	);
};

export default SaveButton;

SaveButton.propTypes = {
	onClick: PropTypes.func,
	isDisabled: PropTypes.bool,
};

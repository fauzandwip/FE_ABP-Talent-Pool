import PropTypes from 'prop-types';

const EditButton = ({ dataCy, ...props }) => {
	return (
		<button>
			<object
				{...props}
				data-cy={dataCy}
				data="./icons/todo-title-edit-button.svg"
				className="pointer-events-none"
			/>
		</button>
	);
};

export default EditButton;

EditButton.propTypes = {
	dataCy: PropTypes.string,
};

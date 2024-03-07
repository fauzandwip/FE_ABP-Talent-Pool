import PropTypes from 'prop-types';

const AddButton = ({ onClick }) => {
	return (
		<button
			data-cy="activity-add-button"
			className="bg-blue-primary flex items-center gap-2 rounded-[45px] py-3.5 px-6"
			onClick={onClick}
		>
			<object data="/icons/plus.svg" className=" pointer-events-none" />
			<p className="text-slate-100 text-lg font-semibold">Tambah</p>
		</button>
	);
};

export default AddButton;

AddButton.propTypes = {
	onClick: PropTypes.func,
};

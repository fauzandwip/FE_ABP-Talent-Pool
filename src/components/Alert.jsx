import PropTypes from 'prop-types';

const Alert = ({ onClick }) => {
	return (
		<div
			onClick={onClick}
			className=" absolute top-0 left-0 w-full h-screen z-50 bg-gray-800/70 flex justify-center items-center cursor-pointer"
		>
			<div
				data-cy="modal-information"
				className="w-[490px] h-[58px] px-7 py-4 flex justify-start items-center gap-3 bg-white rounded-lg shadow-xl"
			>
				<img
					data-cy="modal-information-icon"
					src="/icons/modal/modal-information-icon.svg"
					alt="Information Icon"
					className="w-6 h-6"
				/>
				<p data-cy="modal-information-title">Activity berhasil dihapus</p>
			</div>
		</div>
	);
};

export default Alert;

Alert.propTypes = {
	onClick: PropTypes.func,
};

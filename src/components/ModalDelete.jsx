import PropTypes from 'prop-types';

const ModalDelete = ({ question, item, onClickCancel, onClickDelete }) => {
	return (
		<div className=" absolute top-0 left-0 w-full h-screen z-50 bg-gray-800/70 flex justify-center items-center">
			<div className="w-[490px] h-[355px] bg-white rounded-xl shadow-lg flex flex-col items-center justify-around py-10">
				<div>
					<object data="./icons/modal/modal-delete-icon.svg"></object>
				</div>

				<div className="text-center">
					<h4 className=" text-lg font-medium">{question}</h4>
					<h4 className=" text-lg font-bold">{item}</h4>
				</div>

				<div className="flex gap-5">
					<button
						onClick={onClickCancel}
						className="w-[150px] h-[54px] text-lg font-bold rounded-full bg-gray-secondary"
					>
						Batal
					</button>
					<button
						onClick={onClickDelete}
						className="w-[150px] h-[54px] text-lg font-bold rounded-full bg-[#ED4C5C] text-white"
					>
						Hapus
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalDelete;

ModalDelete.propTypes = {
	question: PropTypes.string,
	item: PropTypes.string,
	onClickCancel: PropTypes.func,
	onClickDelete: PropTypes.func,
};

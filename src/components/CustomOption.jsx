import PropTypes from 'prop-types';

const CustomOption = ({ data, index, onClick, isSelected }) => {
	return (
		<li
			onClick={onClick}
			data-cy={data['data-cy']}
			className={`hover:bg-blue-100 cursor-pointer ${
				index === 0 ? '' : 'border-t border-gray-secondary'
			} ${isSelected && 'bg-blue-300'}`}
		>
			<div className="flex gap-4 justify-between p-4">
				<div className="flex gap-4 items-center">
					<div className={`w-3 h-3 rounded-full ${data.color}`}></div>
					<a className="text-base">{data.title}</a>
				</div>
				{isSelected && <img src="/icons/check.svg" />}
			</div>
		</li>
	);
};

export default CustomOption;

CustomOption.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
	onClick: PropTypes.func,
	isSelected: PropTypes.bool,
};

import PropTypes from 'prop-types';

const CustomOption = ({ data, index }) => {
	return (
		<li
			data-cy={data['data-cy']}
			className={`hover:bg-blue-100 ${
				index === 0 ? '' : 'border-t border-gray-secondary'
			}`}
		>
			<div className="flex gap-4 justify-between p-4">
				<div className="flex gap-4 items-center">
					<div className={`w-3 h-3 rounded-full ${data.color}`}></div>
					<a className="text-base">{data.title}</a>
				</div>
				<object data="./icons/check.svg" />
			</div>
		</li>
	);
};

export default CustomOption;

CustomOption.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
};

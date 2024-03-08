import PropTypes from 'prop-types';

const SortItem = ({ data, index }) => {
	return (
		<li data-cy={data['data-cy']}>
			<button
				className={`flex w-full justify-between px-5 py-4 ${
					index === 0 ? '' : 'border-t border-gray-secondary'
				}`}
			>
				<div className="flex gap-4">
					<img
						src={`/icons/sort/${data.iconUrl}`}
						className="  w-[18px] h-[18px]"
					/>
					{data.title}
				</div>
				<div>√</div>
			</button>
		</li>
	);
};

export default SortItem;

SortItem.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
};

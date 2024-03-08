import CustomOption from './CustomOption';
import PropTypes from 'prop-types';

const SelectPriority = ({ priority, setPriority }) => {
	const priorityOptions = [
		{
			priority: 'very-high',
			title: 'Very High',
			color: 'bg-red-500',
			'data-cy': 'modal-add-priority-very-high',
		},
		{
			priority: 'high',
			title: 'High',
			color: 'bg-yellow-500',
			'data-cy': 'modal-add-priority-high',
		},
		{
			priority: 'normal',
			title: 'Medium',
			color: 'bg-teal-600',
			'data-cy': 'modal-add-priority-medium',
		},
		{
			priority: 'low',
			title: 'Low',
			color: 'bg-blue-500',
			'data-cy': 'modal-add-priority-low',
		},
		{
			priority: 'very-low',
			title: 'Very Low',
			color: 'bg-purple-600',
			'data-cy': 'modal-add-priority-very-low',
		},
	];

	return (
		<label
			htmlFor=""
			data-cy="modal-add-priority-title"
			className=" text-xs font-semibold flex flex-col gap-2"
		>
			PRIORITY
			<div data-cy="modal-add-priority-dropdown" className="dropdown">
				<div
					tabIndex={0}
					role="button"
					className="border border-gray-secondary rounded-md bg-white flex justify-between text-base font-normal px-5 py-4 w-60"
				>
					{priority.index !== null ? (
						<div className="flex gap-4 items-center">
							<div
								className={`w-3 h-3 rounded-full ${
									priorityOptions[priority.index].color
								}`}
							/>
							<a className="text-base">
								{priorityOptions[priority.index].title}
							</a>
						</div>
					) : (
						<p>Pilih priority</p>
					)}
					<img src="/icons/chevron-down.svg" className="  w-6 h-6" />
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] bg-white shadow rounded-md border border-gray-secondary w-60 p-0 font-normal"
				>
					{priorityOptions.map((data, index) => {
						return (
							<CustomOption
								key={index}
								data={data}
								onClick={() => setPriority({ priority: data.priority, index })}
								isSelected={priority.index === index}
							/>
						);
					})}
				</ul>
			</div>
		</label>
	);
};

export default SelectPriority;

SelectPriority.propTypes = {
	priority: PropTypes.object,
	setPriority: PropTypes.func,
};

import CustomOption from './CustomOption';

const SelectPriority = () => {
	const priorityOptions = [
		{
			title: 'Very High',
			color: 'bg-red-500',
			'data-cy': 'modal-add-priority-very-high',
		},
		{
			title: 'High',
			color: 'bg-yellow-500',
			'data-cy': 'modal-add-priority-high',
		},
		{
			title: 'Medium',
			color: 'bg-teal-600',
			'data-cy': 'modal-add-priority-medium',
		},
		{
			title: 'Low',
			color: 'bg-blue-500',
			'data-cy': 'modal-add-priority-low',
		},
		{
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
					Pilih priority
					<object
						data="./icons/chevron-down.svg"
						className=" pointer-events-none"
					/>
				</div>
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] bg-white shadow rounded-md border border-gray-secondary w-60 p-0 font-normal"
				>
					{priorityOptions.map((data, index) => {
						return <CustomOption key={index} data={data} />;
					})}
				</ul>
			</div>
		</label>
	);
};

export default SelectPriority;

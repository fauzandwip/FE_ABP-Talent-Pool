import CustomOption from './CustomOption';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentTodo } from '../features/todo/todoSlice';

const SelectPriority = () => {
	const dispatch = useDispatch();
	const { currentTodo } = useSelector((state) => state.todo);

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

	const getIndex = () => {
		const index = priorityOptions.findIndex(
			(el) => el.priority === currentTodo.priority
		);
		return index;
	};

	const getValue = (key) => {
		return priorityOptions[getIndex()][key];
	};

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
					{getIndex() !== -1 ? (
						<div className="flex gap-4 items-center">
							<div className={`w-3 h-3 rounded-full ${getValue('color')}`} />
							<a className="text-base">{getValue('title')}</a>
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
								onClick={() =>
									dispatch(setCurrentTodo({ priority: data.priority }))
								}
							/>
						);
					})}
				</ul>
			</div>
		</label>
	);
};

export default SelectPriority;

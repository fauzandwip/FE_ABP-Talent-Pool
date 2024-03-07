import SortItem from './SortItem';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSortList } from '../features/todo/todoSlice';

const SortList = () => {
	const sortList = [
		{
			title: 'Terbaru',
			iconUrl: 'sort-latest.svg',
			'data-cy': 'sort-latest',
		},
		{
			title: 'Terlama',
			iconUrl: 'sort-oldest.svg',
			'data-cy': 'sort-oldest',
		},
		{ title: 'A-Z', iconUrl: 'sort-az.svg', 'data-cy': 'sort-az' },
		{ title: 'Z-A', iconUrl: 'sort-za.svg', 'data-cy': 'sort-za' },
		{
			title: 'Belum Selesai',
			iconUrl: 'sort-unfinished.svg',
			'data-cy': 'sort-unfinished',
		},
	];
	const dispatch = useDispatch();
	const showSortList = useSelector((state) => state.todo.showSortList);

	return (
		<div className=" relative">
			<button
				id="sort-btn"
				data-cy="todo-sort-button"
				className="p-4 aspect-square rounded-full border border-gray-secondary"
				onClick={() => dispatch(setShowSortList())}
			>
				<img src="./icons/tabler_arrows-sort.svg" className="  w-6 h-6" />
			</button>

			<div className={showSortList ? '' : 'hidden'}>
				<ul className="absolute mt-2 bg-white rounded-md w-[235px] shadow-xl">
					{sortList.length &&
						sortList.map((data, index) => {
							return <SortItem key={index} data={data} index={index} />;
						})}
				</ul>
			</div>
		</div>
	);
};

export default SortList;

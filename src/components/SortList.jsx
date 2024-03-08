import SortItem from './SortItem';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchDetailActivity,
	setShowSortList,
} from '../features/todo/todoSlice';
import { useParams } from 'react-router-dom';

const SortList = () => {
	const { id } = useParams();
	const sortList = [
		{
			title: 'Terbaru',
			iconUrl: 'sort-latest.svg',
			'data-cy': 'sort-latest',
			eventSort: (arr) => {
				const newArr = [...arr];
				return newArr.sort((a, b) => b.id - a.id);
			},
		},
		{
			title: 'Terlama',
			iconUrl: 'sort-oldest.svg',
			'data-cy': 'sort-oldest',
			eventSort: (arr) => {
				const newArr = [...arr];
				return newArr.sort((a, b) => a.id - b.id);
			},
		},
		{
			title: 'A-Z',
			iconUrl: 'sort-az.svg',
			'data-cy': 'sort-az',
			eventSort: (arr) => {
				const newArr = [...arr];
				return newArr.sort((a, b) => a.title.localeCompare(b.title));
			},
		},
		{
			title: 'Z-A',
			iconUrl: 'sort-za.svg',
			'data-cy': 'sort-za',
			eventSort: (arr) => {
				const newArr = [...arr];
				return newArr.sort((a, b) => b.title.localeCompare(a.title));
			},
		},
		{
			title: 'Belum Selesai',
			iconUrl: 'sort-unfinished.svg',
			'data-cy': 'sort-unfinished',
			eventSort: (arr) => {
				const newArr = [...arr];
				return newArr.filter((el) => el.is_active === 1);
			},
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
				<img src="/icons/tabler_arrows-sort.svg" className="  w-6 h-6" />
			</button>

			<div className={showSortList ? '' : 'hidden'}>
				<ul className="absolute mt-2 bg-white rounded-md w-[235px] shadow-xl">
					{sortList.length &&
						sortList.map((data, index) => {
							return (
								<SortItem
									key={index}
									data={data}
									index={index}
									onClick={() =>
										dispatch(fetchDetailActivity(id, data.eventSort))
									}
								/>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default SortList;

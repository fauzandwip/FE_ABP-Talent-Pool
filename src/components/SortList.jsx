import { useState } from 'react';
import SortItem from './SortItem';

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
	const [showSortList, setShowSortList] = useState(false);

	return (
		<div className=" relative">
			<button
				id="sort-btn"
				data-cy="todo-sort-button"
				className="p-4 aspect-square rounded-full border border-gray-secondary"
				onClick={() => setShowSortList(showSortList ? false : true)}
			>
				<object
					data="./icons/tabler_arrows-sort.svg"
					className=" pointer-events-none"
				/>
			</button>
			{showSortList && (
				<ul className="absolute mt-2 bg-white rounded-md w-[235px] shadow-xl">
					{sortList.length &&
						sortList.map((data, index) => {
							return <SortItem key={index} data={data} index={index} />;
						})}
				</ul>
			)}
		</div>
	);
};

export default SortList;

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

	return (
		<ul className=" absolute mt-2 bg-white flex flex-col rounded-md w-[235px] shadow-xl">
			{sortList.length &&
				sortList.map((data, index) => {
					return <SortItem key={index} data={data} index={index} />;
				})}
		</ul>
	);
};

export default SortList;

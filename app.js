const sortList = [
	['Terbaru', 'sort-latest.svg', 'sort-latest'],
	['Terlama', 'sort-oldest.svg', 'sort-oldest'],
	['A-Z', 'sort-az.svg', 'sort-az'],
	['Z-A', 'sort-za.svg', 'sort-za'],
	['Belum Selesai', 'sort-unfinished.svg', 'sort-unfinished'],
];

const sorts = sortList.map((el) => {
	return {
		title: el[0],
		iconUrl: el[1],
		'data-cy': el[2],
	};
});

console.log(sorts);

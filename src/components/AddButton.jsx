const AddButton = () => {
	return (
		<div
			data-cy="activity-add-button"
			className="bg-blue-primary flex items-center gap-2 rounded-[45px] py-3.5 px-6"
		>
			<object data="/icons/plus.svg" />
			<p className="text-slate-100 text-lg font-semibold">Tambah</p>
		</div>
	);
};

export default AddButton;

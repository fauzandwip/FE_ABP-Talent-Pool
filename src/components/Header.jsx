const Header = () => {
	return (
		<div
			data-cy="header-background"
			className="w-full px-56 py-8 bg-blue-primary fixed top-0 left-0 shadow-lg z-40"
		>
			<h1 data-cy="header-title" className="text-2xl text-slate-100 font-bold">
				TO DO LIST APP
			</h1>
		</div>
	);
};

export default Header;

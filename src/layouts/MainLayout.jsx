import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
	return (
		<div className=" min-h-screen px-56 bg-white-secondary">
			<Header />
			<Outlet />
		</div>
	);
};

export default MainLayout;

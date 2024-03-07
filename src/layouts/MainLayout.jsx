import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
	return (
		<div className=" min-h-screen bg-white-secondary">
			<Header />
			<Outlet />
		</div>
	);
};

export default MainLayout;

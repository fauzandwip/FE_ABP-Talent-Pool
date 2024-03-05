import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
		],
	},
]);

export default router;

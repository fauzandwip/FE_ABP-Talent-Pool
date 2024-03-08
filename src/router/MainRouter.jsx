import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../layouts/MainLayout';
import DetailActivity from '../pages/DetailActivity';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '',
				element: <Dashboard />,
			},
			{
				path: 'detail/:id',
				element: <DetailActivity />,
			},
		],
	},
]);

export default router;

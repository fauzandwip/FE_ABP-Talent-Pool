import ActivityTitle from '../components/ActivityTitle';
import AddButton from '../components/AddButton';
import EmptyStateImage from '../components/EmptyStateImage';

const Dashboard = () => {
	return (
		<div className=" min-h-screen pt-32">
			<div className="flex justify-between w-full">
				<ActivityTitle />
				<AddButton />
			</div>
			<EmptyStateImage />
		</div>
	);
};

export default Dashboard;

import Activites from '../components/Activites';
import ActivityTitle from '../components/ActivityTitle';
import AddButton from '../components/AddButton';
import EmptyStateImage from '../components/EmptyStateImage';

const Dashboard = () => {
	return (
		<div className="px-56 min-h-screen pt-32">
			<div className="flex justify-between w-full mb-12">
				<ActivityTitle />
				<AddButton />
			</div>

			<EmptyStateImage
				dataCy={'activity-empty-state'}
				imageUrl={'/icons/activity-empty-state.svg'}
			/>
			<Activites />
		</div>
	);
};

export default Dashboard;

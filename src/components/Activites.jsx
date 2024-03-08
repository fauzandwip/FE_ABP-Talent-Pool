import ActivityItem from './ActivityItem';
import { useSelector } from 'react-redux';

const Activites = () => {
	const { activities } = useSelector((state) => state.activity);

	return (
		<div className="w-full grid grid-cols-4 gap-5 pb-10">
			{activities.map((data, index) => {
				return <ActivityItem key={index} data={data} />;
			})}
		</div>
	);
};

export default Activites;

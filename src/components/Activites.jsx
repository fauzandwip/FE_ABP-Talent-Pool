import { useState } from 'react';
import ActivityItem from './ActivityItem';

const Activites = () => {
	const [activities, setActivites] = useState(Array(15).fill(0));

	return (
		<div className="w-full grid grid-cols-4 gap-5 pb-10">
			{activities.length &&
				activities.map((_, index) => {
					return <ActivityItem key={index} />;
				})}
		</div>
	);
};

export default Activites;

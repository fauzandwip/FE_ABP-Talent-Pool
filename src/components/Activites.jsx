import { useEffect } from 'react';
import ActivityItem from './ActivityItem';
import { useSelector } from 'react-redux';
import { fetchActivities } from '../features/activity/activitySlice';
import { useDispatch } from 'react-redux';

const Activites = () => {
	const { activities } = useSelector((state) => state.activity);
	const dispatch = useDispatch();

	const fetchActivitiesData = async () => {
		try {
			dispatch(fetchActivities());
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchActivitiesData();
	}, []);

	return (
		<div className="w-full grid grid-cols-4 gap-5 pb-10">
			{activities.map((data, index) => {
				return <ActivityItem key={index} data={data} />;
			})}
		</div>
	);
};

export default Activites;

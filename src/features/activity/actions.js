import api from '../../api';

const baseEmail = 'fauzandprasetyo%40gmail.com';
// const baseEmail = 'yoga%2B1%40skyshi.io';

export const fetchActivitiesApi = async () => {
	const { data } = await api.get(`/activity-groups?email=${baseEmail}`);
	// console.log(data);
	return data;
};

export const addActivityApi = async (data) => {
	await api.post('/activity-groups', data);
	return;
};

export const deleteActivityApi = async (id) => {
	await api.delete(`/activity-groups/${id}`);
	return;
};

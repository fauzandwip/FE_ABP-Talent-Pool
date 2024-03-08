import api from '../../api';

export const fetchDetailActivityApi = async (id) => {
	const { data } = await api.get(`/activity-groups/${id}`);
	return data;
};

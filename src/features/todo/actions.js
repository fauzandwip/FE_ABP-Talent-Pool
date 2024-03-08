import api from '../../api';

export const fetchDetailActivityApi = async (id) => {
	const { data } = await api.get(`/activity-groups/${id}`);
	return data;
};

export const addTodoApi = async (todo) => {
	await api.post('/todo-items', todo);
	return;
};

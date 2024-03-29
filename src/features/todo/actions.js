import api from '../../api';

export const fetchDetailActivityApi = async (id) => {
	const { data } = await api.get(`/activity-groups/${id}`);
	return data;
};

export const updateActivityTitle = async (id, title) => {
	await api.patch(`/activity-groups/${id}`, { title });
	return;
};

export const addTodoApi = async (todo) => {
	await api.post('/todo-items', todo);
	return;
};

export const updateTodoApi = async (id, todo) => {
	// console.log(id, todo);
	await api.patch(`/todo-items/${id}`, todo);
	return;
};

export const deleteTodoApi = async (id) => {
	await api.delete(`/todo-items/${id}`);
	return;
};

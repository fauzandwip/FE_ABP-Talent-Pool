import { createSlice } from '@reduxjs/toolkit';
import { fetchDetailActivityApi } from './actions';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		detailActivity: {
			id: null,
			title: '',
			todo_items: [],
		},
		showModalAdd: false,
		showModalEdit: false,
		showModalDelete: false,
		showSortList: false,
	},
	reducers: {
		setShowModalDelete: (state) => {
			state.showModalDelete = state.showModalDelete ? false : true;
		},
		setShowModalAdd: (state) => {
			state.showModalAdd = state.showModalAdd ? false : true;
		},
		setShowModalEdit: (state) => {
			state.showModalEdit = state.showModalEdit ? false : true;
		},
		setShowSortList: (state) => {
			state.showSortList = state.showSortList ? false : true;
		},
		setDetailActivity: (state, action) => {
			state.detailActivity = action.payload;
		},
	},
});

export const {
	setDetailActivity,
	setShowModalAdd,
	setShowModalEdit,
	setShowModalDelete,
	setShowSortList,
} = todoSlice.actions;

export const fetchDetailActivity = (id) => async (dispatch) => {
	const data = await fetchDetailActivityApi(id);
	dispatch(setDetailActivity(data));
};

export default todoSlice.reducer;

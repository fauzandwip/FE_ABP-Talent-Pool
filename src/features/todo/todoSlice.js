import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
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
	},
});

export const {
	setShowModalAdd,
	setShowModalEdit,
	setShowModalDelete,
	setShowSortList,
} = todoSlice.actions;

export default todoSlice.reducer;

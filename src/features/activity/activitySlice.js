import { createSlice } from '@reduxjs/toolkit';

export const activitySlice = createSlice({
	name: 'activity',
	initialState: {
		showModalDelete: false,
	},
	reducers: {
		setShowModalDelete: (state) => {
			state.showModalDelete = state.showModalDelete ? false : true;
		},
	},
});

export const { setShowModalDelete } = activitySlice.actions;

export default activitySlice.reducer;

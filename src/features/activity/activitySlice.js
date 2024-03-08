import { createSlice } from '@reduxjs/toolkit';
import { fetchActivitiesApi } from './actions';

export const activitySlice = createSlice({
	name: 'activity',
	initialState: {
		activities: [],
		showModalDelete: false,
	},
	reducers: {
		setShowModalDelete: (state) => {
			state.showModalDelete = state.showModalDelete ? false : true;
		},
		setActivities: (state, action) => {
			state.activities = action.payload.data;
		},
	},
});

export const { setShowModalDelete, setActivities } = activitySlice.actions;

export const fetchActivities = () => async (dispacth) => {
	const data = await fetchActivitiesApi();
	dispacth(setActivities(data));
};

export default activitySlice.reducer;

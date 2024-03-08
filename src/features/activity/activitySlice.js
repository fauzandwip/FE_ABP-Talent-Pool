import { createSlice } from '@reduxjs/toolkit';
import { addActivityApi, fetchActivitiesApi } from './actions';

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

export const fetchActivities = () => async (dispatch) => {
	const data = await fetchActivitiesApi();
	dispatch(setActivities(data));
};

// export const addActivity = (data) => async (dispatch) => {
// 	await addActivityApi(data);
// };

export default activitySlice.reducer;

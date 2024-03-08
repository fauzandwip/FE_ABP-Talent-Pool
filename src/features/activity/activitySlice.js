import { createSlice } from '@reduxjs/toolkit';
import { fetchActivitiesApi } from './actions';

export const activitySlice = createSlice({
	name: 'activity',
	initialState: {
		activities: [],
		activity: {
			id: null,
			title: '',
		},
		showModalDelete: false,
	},
	reducers: {
		setShowModalDelete: (state) => {
			state.showModalDelete = state.showModalDelete ? false : true;
		},
		setActivities: (state, action) => {
			state.activities = action.payload.data;
		},
		setActivity: (state, action) => {
			state.activity = action.payload;
		},
	},
});

export const { setShowModalDelete, setActivities, setActivity } =
	activitySlice.actions;

export const fetchActivities = () => async (dispatch) => {
	const data = await fetchActivitiesApi();
	dispatch(setActivities(data));
};

// export const addActivity = (data) => async (dispatch) => {
// 	await addActivityApi(data);
// };

export default activitySlice.reducer;

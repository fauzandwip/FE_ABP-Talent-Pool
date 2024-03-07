import { configureStore } from '@reduxjs/toolkit';
import activityReducer from './features/activity/activitySlice';
import todoReducer from './features/todo/todoSlice';

const store = configureStore({
	reducer: {
		activity: activityReducer,
		todo: todoReducer,
	},
});

export default store;

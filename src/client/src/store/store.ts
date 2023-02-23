import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';

import userReducer from '../apps/mail/store/slices/userSlice';
import messagesReducer from '../apps/mail/store/slices/messageSlice';

import userFilesReducer from '../apps/files/store/slices/userSlice';
import messagesFilesReducer from '../apps/files/store/slices/messageSlice';

import userVishingReducer from '../apps/vishing/store/slices/userSlice';
import scriptVishingReducer from '../apps/vishing/store/slices/scriptSlice';

import labDinnerReducer from '../apps/dinner/store/slices/labSlice';
import scriptDinnerReducer from '../apps/dinner/store/slices/scriptSlice';
import timerDinnerReducer from './slices/timerSlice';

import labCheckpointReducer from '../apps/checkpoint/store/slices/labSlice';
import scriptCheckpointReducer from '../apps/checkpoint/store/slices/scriptSlice';

export const store = configureStore({
	reducer: {
		app: appSlice,

		user: userReducer,
		messages: messagesReducer,

		userFiles: userFilesReducer,
		messagesFiles: messagesFilesReducer,

		userVishing: userVishingReducer,
		scriptVishing: scriptVishingReducer,

		labDinner: labDinnerReducer,
		scriptDinner: scriptDinnerReducer,
		timerDinner:timerDinnerReducer,

		labCheckpoint: labCheckpointReducer,
		scriptCheckpoint: scriptCheckpointReducer
	}, 
	middleware: [
		...getDefaultMiddleware({
			serializableCheck: false
		}),
	],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import appSlice from './slices/appSlice';
import userReducer from '../apps/mail/store/slices/userSlice';
import messagesReducer from '../apps/mail/store/slices/messageSlice';

export const store = configureStore({
	reducer: {
		app: appSlice,
		user: userReducer,
		messages: messagesReducer,
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
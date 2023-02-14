
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import messagesReducer from './slices/messageSlice';
export const store = configureStore({
	reducer: {
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
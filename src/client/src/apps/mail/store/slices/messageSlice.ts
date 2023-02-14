import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import mockupMessages from './mockupMessages';
import byField from '../../byField';

const initialState: Message[] = [...mockupMessages].sort(byField<Message>('date'));

export const messagesSlice = createSlice({
	name: 'messages',
	initialState,
	reducers: {
		setMessages: (state, action: PayloadAction<Message[]>) => {
			return action.payload;
		},
		addToTrash: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						type: 'trash' as BoxState,
					};
				} else return message;
			});
		},
		addToFavorites: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						favorite: true,
					};
				} else return message;
			});
		},
		addToSpam: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						type: 'spam' as BoxState,
					};
				} else return message;
			});
		},
		markRead: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						read: true,
					};
				} else return message;
			});
		},
		markUnread: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload){
					return {
						...message,
						read: false,
					};
				} else return message;
			});
		},
		markAllAsRead: (state) => {
			return state.map(message => ({ ...message, read: true }));
		},
		addToInbox: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						type: 'inbox' as BoxState,
					};
				} else return message;
			});
		},
		deleteFromFavorite: (state, action: PayloadAction<number>) => {
			return state.map(message => {
				if (message.id === action.payload) {
					return {
						...message,
						favorite: false
					};
				} else return message;
			});
		},
	},
});

export const {
	setMessages,
	addToSpam,
	addToFavorites,
	addToTrash,
	markRead,
	markAllAsRead,
	markUnread,
	addToInbox,
	deleteFromFavorite
} = messagesSlice.actions;
export default messagesSlice.reducer;

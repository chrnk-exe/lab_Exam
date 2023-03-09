import { createSlice } from '@reduxjs/toolkit';

export const initialState = (JSON.parse(
	window.sessionStorage.getItem('startedCheckpoint') as string,
) as boolean) || false;

export const labSlice = createSlice({
	name: 'labCheckpoint',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setStarted: (state) => {
			window.sessionStorage.setItem('startedCheckpoint', JSON.stringify(true));
			return true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setNotStarted: (state) => {
			window.sessionStorage.setItem('startedCheckpoint', JSON.stringify(false));
			return false;
		},
	},
});

export const { setStarted, setNotStarted } = labSlice.actions;
export default labSlice.reducer;

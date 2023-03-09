import { createSlice } from '@reduxjs/toolkit';

export const initialState = (JSON.parse(
	window.sessionStorage.getItem('startedDinner') as string,
) as boolean) || false;

export const labSlice = createSlice({
	name: 'labDinner',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setStarted: (state) => {
			window.sessionStorage.setItem('startedDinner', JSON.stringify(true));
			return true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setNotStarted: (state) => {
			window.sessionStorage.setItem('startedDinner', JSON.stringify(false));
			return false;
		},
	},
});

export const { setStarted, setNotStarted } = labSlice.actions;
export default labSlice.reducer;

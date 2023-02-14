import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = 0;


export const appSlice = createSlice({
	name: 'script',
	initialState,
	reducers:{
		nextApp: (state) => state + 1,
		setApp: (state, action: PayloadAction<number>) => state = action.payload
	},
});

export const { nextApp, setApp } = appSlice.actions;
export default appSlice.reducer;

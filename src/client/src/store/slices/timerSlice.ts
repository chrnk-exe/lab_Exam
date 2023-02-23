import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = '';

export const timerSlice = createSlice({
	name: 'timer',
	initialState,
	reducers:{
		setTime: (state, action: PayloadAction<string>) => {
			state = action.payload;
		}
	},
});

export const { setTime } = timerSlice.actions;
export default timerSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
	step: number;
	result: number;
	currentResult: boolean;
	replica: number;
} = {
	step: 1,
	result: 1,
	currentResult: false,
	replica: 0
};

export const scriptSlice = createSlice({
	name: 'script',
	initialState,
	reducers: {
		incrementResult: (state) => {
			state.result = state.result + 1;
		},
		decrementResult: (state) => {
			state.result = state.result - 1;
		},
		nextStep: (state) => {
			state.step = state.step + 1;
		},
		nextReplica: (state) => {
			state.replica += 1;
		},
		zeroReplica: (state) => {
			state.replica = 0;
		},
		setReplica: (state, action: PayloadAction<number>) => {
			state.replica = action.payload;
		},
		setCurrentResult: (state, action:PayloadAction<boolean>) => {
			state.currentResult = action.payload;
		}
	},
});

export const { incrementResult, nextStep, decrementResult, nextReplica, zeroReplica, setReplica,
	setCurrentResult } = scriptSlice.actions;
export default scriptSlice.reducer;

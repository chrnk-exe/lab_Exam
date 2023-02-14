import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const initialState: BoxState = 'inbox' as BoxState;

export const boxSlice = createSlice({
	name: 'box',
	initialState,
	reducers: {
		setBox: (state: BoxState, action: PayloadAction<BoxState>) => {
			state = action.payload;
		},
		setInbox: () => 'inbox' as BoxState,
		setTrash: () => 'trash' as BoxState,
		setDrafts: () => 'drafts' as BoxState,
		setSent: () => 'sent' as BoxState,
		setSpam: () => 'spam' as BoxState,
		setFavorite: () => 'favorite' as BoxState
	}
},
);

export const { setBox, setInbox, setTrash, setDrafts, setSent, setSpam} = boxSlice.actions;
export default boxSlice.reducer;

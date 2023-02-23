import React from 'react';
import { Box, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
	addToFavorites,
	addToTrash,
	addToSpam,
	addToInbox,
	deleteFromFavorite
} from '../store/slices/messageSlice';

const enum MessageActions {
	Favorite = 1,
	Delete,
	Spam,
	Inbox,
	Unfavorite,
}

export default function MessageItemMenu({ id }: { id: number }) {
	const messageType = useAppSelector(
		state => state.messagesFiles.find(message => message.id === id)?.type,
	);
	const isFavorite = useAppSelector(
		state => state.messagesFiles.find(msg => msg.id === id)?.favorite,
	);

	const dispatch = useAppDispatch();

	const handleClose = (action: number) => {
		switch (action) {
		case MessageActions.Favorite:
			dispatch(addToFavorites(id));
			break;
		case MessageActions.Delete:
			dispatch(addToTrash(id));
			break;
		case MessageActions.Spam:
			dispatch(addToSpam(id));
			break;
		case MessageActions.Inbox:
			dispatch(addToInbox(id));
			break;
		case MessageActions.Unfavorite:
			dispatch(deleteFromFavorite(id));
			break;
		default:
			break;
		}
	};

	return (
		<Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} gap={1} sx={{ml: 1}}>
			<Button
				variant={'contained'}
				color={!isFavorite ? 'success' : 'warning'}
				sx={{
					width: '100px'
				}}
				disabled={messageType === 'trash'}
				onClick={() => handleClose(!isFavorite ? MessageActions.Favorite : MessageActions.Unfavorite)}>
				{!isFavorite ? 'Favorite' : 'Dislike'}
			</Button>
			<Button
				color={messageType === 'trash' ? 'success' : 'error'}
				variant={'contained'}
				sx={{
					width: '100px'
				}}
				disabled={isFavorite}
				onClick={() => handleClose(messageType === 'trash' ? MessageActions.Inbox : MessageActions.Delete)}>
				{messageType === 'trash' ? 'Reestablish' : 'Delete'}
			</Button>
		</Box>
	);
}

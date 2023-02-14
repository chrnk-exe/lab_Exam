import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ClickAwayListener } from '@mui/material';
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
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const messageType = useAppSelector(
		state => state.messages.find(message => message.id === id)?.type,
	);

	const isFavorite = useAppSelector(
		state => state.messages.find(msg => msg.id === id)?.favorite,
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
		setAnchorEl(null);
	};

	return (
		<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
			<div>
				<Button onClick={handleClick}>
					<MoreVertIcon />
				</Button>
				{messageType === 'inbox' ? (
					<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
						{!isFavorite ? (
							<MenuItem
								onClick={() =>
									handleClose(MessageActions.Favorite)
								}>
								Favorite
							</MenuItem>
						) : (
							<MenuItem
								onClick={() =>
									handleClose(MessageActions.Unfavorite)
								}>
								Delete from favorites
							</MenuItem>
						)}
						<MenuItem
							onClick={() => handleClose(MessageActions.Delete)}>
							Delete
						</MenuItem>
						<MenuItem
							onClick={() => handleClose(MessageActions.Spam)}>
							Spam
						</MenuItem>
					</Menu>
				) : (
					<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
						<MenuItem
							onClick={() => handleClose(MessageActions.Inbox)}>
							Reestablish
						</MenuItem>
						{!isFavorite ? (
							<MenuItem
								onClick={() =>
									handleClose(MessageActions.Favorite)
								}>
								Favorite
							</MenuItem>
						) : (
							<MenuItem
								onClick={() =>
									handleClose(MessageActions.Unfavorite)
								}>
								Delete from favorites
							</MenuItem>
						)}
					</Menu>
				)}
			</div>
		</ClickAwayListener>
	);
}

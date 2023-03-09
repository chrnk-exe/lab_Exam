import React, {useEffect, useState} from 'react';
import classes from '../styles/App.module.sass';
import { useAppSelector } from '../store/hooks';
import MessageCount from './MessageCount';

import { Outlet, useNavigate } from 'react-router';
import {Box, Button, Fade, Modal, Paper, Typography} from '@mui/material';
import Header from './Header';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// import CreateIcon from '@mui/icons-material/Create';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
// import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import DraftsIcon from '@mui/icons-material/Drafts';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const enum AppActions {
    Compose = 1,
    Inbox,
    Favorites,
    Sent,
    Trash,
    Spam,
    Drafts
}

function arrayEquals(a: Array<number>, b: Array<number>) {
	return a.length === b.length &&
		a.every((val, index) => val === b[index]);
}

function App() {
	const messages = useAppSelector(state => state.messagesFiles);
	const [selected, setSelected] = useState(1);
	const [showFlag, setShowFlag] = useState(false);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);
	const navigate = useNavigate();

	useEffect(() => {
		if(messages.filter(message => message.favorite).length +
			messages.filter(message => message.type === 'trash').length === 5)
		{
			// id 2 и id 5 - id честных писем
			const favoriteMessages = messages
				.filter(message => message.favorite)
				.map(message => message.id);
			setShowFlag(arrayEquals(favoriteMessages, [2, 5]) || arrayEquals(favoriteMessages, [5, 2]));
			handleOpen();
		}
	}, [messages]);



	const Buttons = [
		// {action: AppActions.Compose, icon: <CreateIcon />, text: 'Compose'},
		{action: AppActions.Inbox, icon: <MessageCount messages={messages}/>, text: 'Inbox'},
		{action: AppActions.Favorites, icon: <BookmarksIcon />, text: 'Favorites'},
		// {action: AppActions.Sent, icon: <SendIcon />, text: 'Sent'},
		{action: AppActions.Trash, icon: <DeleteIcon />, text: 'Trash'},
		{action: AppActions.Spam, icon: <ThumbDownAltIcon />, text: 'Spam'},
		{action: AppActions.Drafts, icon: <DraftsIcon />, text: 'Drafts'},
	];

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number,
	) => {
		switch (index) {
		case AppActions.Compose:
			break;
		case AppActions.Inbox:
			navigate('/app/files/app');
			break;
		case AppActions.Favorites:
			navigate('/app/files/app/favorite');
			break;
		case AppActions.Drafts:
			navigate('/app/files/app/drafts');
			break;
		case AppActions.Sent:
			navigate('/app/files/app/sent');
			break;
		case AppActions.Spam:
			navigate('/app/files/app/spam');
			break;
		case AppActions.Trash:
			navigate('/app/files/app/trash');
			break;
		default:
			break;
		}
		setSelected(index);
	};

	return (
		<div className={classes.App}>
			<Header />
			<main className={classes.main}>
				<Paper elevation={8} className={classes.mailApp}>
					<section id={classes.mailBox}>
						<List className={classes.list}>
							{
								Buttons.map((button, index) => (
									<ListItem key={index}>
										<ListItemButton
											selected={selected === button.action}
											onClick={e => handleListItemClick(e, button.action)}>
											<ListItemIcon>
												{button.icon}
											</ListItemIcon>
											<ListItemText>{button.text}</ListItemText>
										</ListItemButton>
									</ListItem>
								))
							}
						</List>
					</section>
					<Outlet />
				</Paper>
			</main>

			<Modal open={open} onClose={handleClose}>
				<Fade in={open}>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="flexStart"
						sx={{
							position: 'absolute' as const,
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							width: 400,
							color: !showFlag ? '#FFFFF1' : '#000',
							bgcolor: showFlag
								? 'background.paper'
								: '#800000',
							border: '2px solid #000',
							boxShadow: 24,
							p: 4,
						}}>
						<Typography
							id="transition-modal-title"
							variant="h6"
							component="h2"
							sx={
								!showFlag
									? {
										textAlign: 'center',
										mb: 2,
										// eslint-disable-next-line no-mixed-spaces-and-tabs
									}
									: undefined
							}>
							{showFlag ? 'Your flag: flag_D@nger0usF1lesDetect3d' : 'You made a mistake, try again!'}
						</Typography>
						{!showFlag && (
							<Button
								variant="outlined"
								sx={{
									alignSelf: 'center',
									borderColor: '#FFFFF1',
									color: '#FFFFF1',
									'&:hover': { borderColor: '#FFFFF1' },
								}}
								onClick={() => window.location.reload()}>
								{'Try again.'}
							</Button>
						)}
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}

export default App;

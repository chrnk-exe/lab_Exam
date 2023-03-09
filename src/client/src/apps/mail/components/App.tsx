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
	const messages = useAppSelector(state => state.messages);
	const [selected, setSelected] = useState(1);
	const navigate = useNavigate();
	const [showFlag, setShowFlag] = useState(false);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const handleOpen = () => setOpen(true);

	useEffect(() => {
		if(messages.filter(message => message.favorite).length +
			messages.filter(message => message.type === 'trash').length === 5)
		{
			// id 3 и id 5 - id честных писем
			const favoriteMessages = messages
				.filter(message => message.favorite)
				.map(message => message.id);
			setShowFlag(arrayEquals(favoriteMessages, [3, 5]) || arrayEquals(favoriteMessages, [5, 3]));
			handleOpen();
		}
	}, [messages]);

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number,
	) => {
		switch (index) {
		case AppActions.Compose:
			break;
		case AppActions.Inbox:
			navigate('/app/mail/app');
			break;
		case AppActions.Favorites:
			navigate('/app/mail/app/favorite');
			break;
		case AppActions.Drafts:
			navigate('/app/mail/app/drafts');
			break;
		case AppActions.Sent:
			navigate('/app/mail/app/sent');
			break;
		case AppActions.Spam:
			navigate('/app/mail/app/spam');
			break;
		case AppActions.Trash:
			navigate('/app/mail/app/trash');
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
							{/* <ListItem>
								<ListItemButton
									selected={selected === AppActions.Compose}
									onClick={e => handleListItemClick(e, AppActions.Compose)}>
									<ListItemIcon>
										<CreateIcon />
									</ListItemIcon>
									<ListItemText>Compose</ListItemText>
								</ListItemButton>
							</ListItem> */}
							<ListItem>
								<ListItemButton
									selected={selected === AppActions.Inbox}
									onClick={e => handleListItemClick(e, AppActions.Inbox)}>
									<ListItemIcon>
										<MessageCount messages={messages} />
									</ListItemIcon>
									<ListItemText>Inbox</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === AppActions.Favorites}
									onClick={e => handleListItemClick(e, AppActions.Favorites)}>
									<ListItemIcon>
										<BookmarksIcon />
									</ListItemIcon>
									<ListItemText>Favorites</ListItemText>
								</ListItemButton>
							</ListItem>
							{/* <ListItem>
								<ListItemButton
									selected={selected === AppActions.Sent}
									onClick={e => handleListItemClick(e, AppActions.Sent)}>
									<ListItemIcon>
										<SendIcon />
									</ListItemIcon>
									<ListItemText>Sent</ListItemText>
								</ListItemButton>
							</ListItem> */}
							<ListItem>
								<ListItemButton
									selected={selected === AppActions.Trash}
									onClick={e => handleListItemClick(e, AppActions.Trash)}>
									<ListItemIcon>
										<DeleteIcon />
									</ListItemIcon>
									<ListItemText>Trash</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === AppActions.Spam}
									onClick={e => handleListItemClick(e, AppActions.Spam)}>
									<ListItemIcon>
										<ThumbDownAltIcon />
									</ListItemIcon>
									<ListItemText>Spam</ListItemText>
								</ListItemButton>
							</ListItem>
							<ListItem>
								<ListItemButton
									selected={selected === AppActions.Drafts}
									onClick={e => handleListItemClick(e, AppActions.Drafts)}>
									<ListItemIcon>
										<DraftsIcon />
									</ListItemIcon>
									<ListItemText>Drafts</ListItemText>
								</ListItemButton>
							</ListItem>
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
							{showFlag ? 'Your flag: flag_Ph1sh1ngC0mpl3ted' : 'You made a mistake, try again!'}
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

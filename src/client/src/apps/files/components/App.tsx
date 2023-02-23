import React, { useState } from 'react';
import classes from '../styles/App.module.sass';
import { useAppSelector } from '../store/hooks';
import MessageCount from './MessageCount';

import { Outlet, useNavigate } from 'react-router';
import { Paper } from '@mui/material';
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
	const navigate = useNavigate();

	const [isAlerted, setAlert] = useState(false);
	if(messages.filter(message => message.favorite).length +
		messages.filter(message => message.type === 'trash').length === 5)
	{
		// id 2 и id 4 - id честных писем
		const favoriteMessages = messages
			.filter(message => message.favorite)
			.map(message => message.id);
		if(arrayEquals(favoriteMessages, [2, 4]) || arrayEquals(favoriteMessages, [4, 2])) {
			if(!isAlerted) {
				alert('Your flag: flag_D@nger0usF1lesDetect3d');
				setAlert(true);
			}
		} else {
			alert('You made a mistake, try again!');
			window.location.reload();
		}
	}

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
		</div>
	);
}

export default App;

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

function App() {
	const messages = useAppSelector(state => state.messages);
	const [selected, setSelected] = useState(1);
	const navigate = useNavigate();

	const handleListItemClick = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>,
		index: number,
	) => {
		switch (index) {
		case AppActions.Compose:
			break;
		case AppActions.Inbox:
			navigate('/app');
			break;
		case AppActions.Favorites:
			navigate('/app/favorite');
			break;
		case AppActions.Drafts:
			navigate('/app/drafts');
			break;
		case AppActions.Sent:
			navigate('/app/sent');
			break;
		case AppActions.Spam:
			navigate('/app/spam');
			break;
		case AppActions.Trash:
			navigate('/app/trash');
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
		</div>
	);
}

export default App;

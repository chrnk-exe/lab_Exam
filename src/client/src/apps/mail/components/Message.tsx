import React, { type ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { Button } from '@mui/material';
import classes from '../styles/Message.module.sass';
import MessageItemMenu from './MessageItemMenu';
import ReplyIcon from '@mui/icons-material/Reply';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
	addToSpam,
	addToTrash,
	markUnread,
} from '../store/slices/messageSlice';

const Message = () => {
	const { messageId } = useParams();
	const message = useAppSelector(state =>
		state.messages.find(message => message.id === +(messageId as string)),
	);
	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	if (message)
		return (
			<div className={classes.message}>
				<div className={classes.messageMenu}>
					<Button
						color="warning"
						startIcon={<ArrowBackIcon />}
						onClick={() => navigate(-1)}>
						Back
					</Button>
					<Button
						color="warning"
						startIcon={<ReplyIcon />}
						href={'#'}>
						Reply
					</Button>
					<Button
						color="warning"
						startIcon={<ShortcutIcon />}
						href={'#'}>
						Forward
					</Button>
					<Button
						color="warning"
						startIcon={<ThumbDownAltIcon />}
						onClick={() => dispatch(addToSpam(message.id))}>
						Spam!
					</Button>
					<Button
						color="warning"
						startIcon={<DeleteIcon />}
						onClick={() => dispatch(addToTrash(message.id))}>
						Delete
					</Button>
					<Button
						color="warning"
						onClick={() => dispatch(markUnread(message.id))}>
						Mark as unread
					</Button>
				</div>

				<h2>
					Subject: {message?.subject}
					<p className={classes.date}>{message.date}</p>{' '}
				</h2>

				<div className={classes.messageInfoContainer}>
					<div className={classes.messageInfo}>
						<img
							src={message?.avatar}
							height={45}
							// width={45}
							alt=""
						/>
						<div className={classes.messageInfoContent}>
							<p>From: {message?.sender}</p>
							<p>To: {message?.to}</p>
						</div>
					</div>
					<div className={classes.smallMenu}>
						<Button
							variant="outlined"
							onClick={() => console.log(message.eml)}
							href={message.eml}
							startIcon={<DownloadIcon />}>
							Download .eml file
						</Button>
						<MessageItemMenu id={message.id} />
					</div>
				</div>

				<main className={classes.mainContent}>
					{message.payload as ReactNode}
				</main>
			</div>
		);
	else {
		return <div>{'Error! Message doesn\'t exist!'}</div>;
	}
};

export default Message;

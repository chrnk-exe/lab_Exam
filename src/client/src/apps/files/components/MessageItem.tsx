import React, { useState } from 'react';
import Button from '@mui/material/Button';
import classes from '../styles/MessageItem.module.sass';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { markRead } from '../store/slices/messageSlice';

const MessageItem = ({
	id,
	subject,
	from,
	read,
	date,
	avatar,
}: {
	id: number;
	subject: string;
	from: string;
	read: boolean;
	date: string;
	avatar: string;
}) => {
	const message = useAppSelector(state =>
		state.messages.find(message => message.id === id),
	);

	const dispatch = useAppDispatch();

	const navigate = useNavigate();

	const [hover, setOnHover] = useState<boolean>(false);

	const onMessageClickHandler = () => {
		dispatch(markRead(id));
		navigate(`/app/files/app/${id}`);
	};

	return (
		<Button
			onMouseEnter={() => setOnHover(true)}
			onMouseLeave={() => setOnHover(false)}
			variant="outlined"
			color={hover ? 'primary' : 'info'}
			fullWidth
			onClick={onMessageClickHandler}>
			<div className={classes.messageItem}>
				<div className={classes.content}>
					<div
						style={{
							paddingTop: '6px',
							alignSelf: 'center',
						}}>
						{!read ? <CircleRoundedIcon /> : <CircleOutlinedIcon />}
					</div>
					<div
						style={{
							paddingTop: '6px',
							alignSelf: 'center',
						}}>
						<img src={avatar} width={40} alt="" />
					</div>
					<div
						style={!read ? { fontWeight: 'bold' } : undefined}
						className={classes.from}>
						{from}
					</div>
					<div>
						{!message?.favorite ? (
							<BookmarkBorderRoundedIcon />
						) : (
							<BookmarkRoundedIcon />
						)}
					</div>
					<div style={!read ? { fontWeight: 'bold' } : undefined}>
						{subject}
					</div>
					{/* <div>{text}</div> */}
				</div>
				<div>
					<div className={classes.msgDate}>{date}</div>
				</div>
			</div>
		</Button>
	);
};

export default MessageItem;

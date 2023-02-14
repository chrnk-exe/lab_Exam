import React from 'react';
import classes from '../styles/Header.module.sass';
import { Button, ButtonGroup } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch } from '../store/hooks';
import { markAllAsRead } from '../store/slices/messageSlice';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useNavigate } from 'react-router';

const Header = () => {
	const logoutHandler = () => {
		window.sessionStorage.clear();
		window.location.reload();
	};

	const dispatch = useAppDispatch();

	const readHandler = () => dispatch(markAllAsRead());
	const navigate = useNavigate();

	return (
		<div className={classes.header}>
			<section className={classes.headerItem}>
				<h2 onClick={() => navigate('/app')}>
					<MailOutlineIcon sx={{ height: '40px', width: '40px' }} />
					Hacktory Mail Service
				</h2>
				<ButtonGroup variant="text" size="large">
					<Button
						sx={{
							':hover': {
								color: 'info.main',
							},
						}}
						onClick={readHandler}
						startIcon={<TaskAltIcon />}
						color="secondary">
						Mark all as read
					</Button>
				</ButtonGroup>
			</section>
			<section className={classes.headerItem}>
				<Button
					sx={{
						':hover': {
							color: 'info.main',
						},
					}}
					onClick={logoutHandler}
					size="large"
					startIcon={<LogoutIcon />}
					color="secondary">
					Log out
				</Button>
			</section>
		</div>
	);
};

export default Header;

import React from 'react';
import classes from './styles/WarningAlert.module.sass';
import { Paper } from '@mui/material';
import cross from './cross.png';
import { ClickAwayListener } from '@mui/material';

const WarningAlert = ({ offFunction }: { offFunction(): void }) => {
	return (
		<ClickAwayListener onClickAway={offFunction}>
			<Paper
				style={{
					borderRadius: '5px',
				}}
				elevation={5}>
				<div className={classes.Alert} onClick={offFunction}>
					<h1>Warning!!!</h1>
					<h2>{'Don\'t'} press this button!</h2>
					<img
						src={cross}
						className={classes.RedCross}
						alt="red cross"
						height={25}
						width={25}
						onClick={offFunction}
					/>
				</div>
			</Paper>
		</ClickAwayListener>
	);
};

export default WarningAlert;

import React from 'react';
import { Box, Typography } from '@mui/material';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useTranslation } from 'react-i18next';



const Finish = () => {
	const { t } = useTranslation('translation', {keyPrefix: 'checkpoint'});

	// const onClickAway = () => {
	// 	nextStep();
	// 	handleCallOn();
	// };

	return (
	// <ClickAwayListener onClickAway={onClickAway}>
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			gap={2}>
			<Typography variant="h4" sx={{ color: '#FFFFF1' }}>
				{t('The_guests_are_over')}
			</Typography>
		</Box>
	// </ClickAwayListener>
	);
};

export default Finish;
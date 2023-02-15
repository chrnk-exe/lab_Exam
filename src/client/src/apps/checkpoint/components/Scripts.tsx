import React, { type FC, useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from '../store/hooks';
// import { useTranslation } from 'react-i18next';
import Quest from './Phone/Quest';
// import Finish from './Phone/Finish';

type Props = {
	openModal(): void;
	showFlag(): void;
};

const Scripts: FC<Props> = ({
	openModal,
	showFlag,
}) => {
	// const { t } = useTranslation('flag');
	const step = useAppSelector(state => state.scriptCheckpoint.step);
	const result = useAppSelector(state => state.scriptCheckpoint.result);

	// const handleFinish = () => setFinish(true);

	useEffect(() => {
		if (step === 6) {
			openModal();
			if (result === 6) {
				showFlag();
			}
		}
	}, [step, result]);

	// if (step !== 8)
	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-evenly"
			alignItems="center"
			sx={{
				width: '90%',
				height: '94%',
				textAlign: 'center',
				bgcolor: 'primary.light',
				borderRadius: '20px',
				flexGrow: 1,
				mx: 3,
			}}>
			<Quest/>
		</Box>
	);
	// else
	// 	return (
	// 		<Box
	// 			display="flex"
	// 			flexDirection="column"
	// 			justifyContent="space-evenly"
	// 			alignItems="center"
	// 			sx={{
	// 				widht: '90%',
	// 				height: '94%',
	// 				textAlign: 'center',
	// 				bgcolor: 'primary.light',
	// 				borderRadius: '20px',
	// 				flexGrow: 1,
	// 				mx: 3,
	// 			}}>
	// 			<Typography variant="h5" sx={{ color: '#FFFFF1' }}>
	// 				{t('no_incoming')}
	// 			</Typography>
	// 		</Box>
	// 	);
};

export default Scripts;

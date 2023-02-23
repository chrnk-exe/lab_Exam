import React, { type FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../store/hooks';
import { useTranslation } from 'react-i18next';
import Quest from './Phone/Quest';

type Props = {
	openModal(): void;
	showFlag(): void;
	time: string;
	subTime(subTime: number): void;
	isReversed: boolean;
};

const Scripts: FC<Props> = ({
	openModal,
	showFlag,
	time,
	subTime,
	isReversed,
}) => {
	const { t } = useTranslation('flag', {keyPrefix: 'dinner'});
	const step = useAppSelector(state => state.scriptDinner.step);
	const result = useAppSelector(state => state.scriptDinner.result);

	useEffect(() => {
		if (step === 7) {
			openModal();
			if (result === 1) {
				showFlag();
			}
		}
	}, [step, result]);

	if (step !== 7)
		return (
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems="center"
				sx={{
					widht: '90%',
					height: '94%',
					textAlign: 'center',
					bgcolor: 'primary.light',
					borderRadius: '20px',
					flexGrow: 1,
					mx: 3,
				}}>
				<Quest time={time} subTime={subTime} isReversed={isReversed} />
			</Box>
		);
	else
		return (
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="space-evenly"
				alignItems="center"
				sx={{
					widht: '90%',
					height: '94%',
					textAlign: 'center',
					bgcolor: 'primary.light',
					borderRadius: '20px',
					flexGrow: 1,
					mx: 3,
				}}>
				<Typography variant="h5" sx={{ color: '#FFFFF1' }}>
					{t('no_incoming')}
				</Typography>
			</Box>
		);
};

export default Scripts;

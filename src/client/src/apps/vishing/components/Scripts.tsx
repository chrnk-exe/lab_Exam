import React, { type FC, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
	nextStep,
	incrementResult,
	setCallState,
} from '../store/slices/scriptSlice';
import {useTranslation} from 'react-i18next';
import Incoming from './Phone/Incoming';
import Talking from './Phone/Talking';
import Finish from './Phone/Finish';

type Props = {
	openModal(): void;
	showFlag(): void;
};

const Scripts: FC<Props> = ({ openModal, showFlag }) => {
	const {t} = useTranslation('flag', {keyPrefix: 'vishing'});
	const step = useAppSelector(state => state.scriptVishing.step);
	const result = useAppSelector(state => state.scriptVishing.result);
	const callState = useAppSelector(state => state.scriptVishing.callState);

	const dispatch = useAppDispatch();
	const handleCallOff = () => dispatch(setCallState('ended'));
	const handleCallOn = () => dispatch(setCallState('incoming'));
	const handleCallPending = () => dispatch(setCallState('talking'));

	useEffect(() => {
		if (step === 6) {
			openModal();
			if (result === 5) {
				showFlag();
			}
		}
	}, [step, result]);

	if (step !== 6)
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
				{
					{
						incoming: (
							<Incoming
								handleCallPending={handleCallPending}
								step={step}
							/>
						),
						talking: (
							<Talking
								incrementResult={() => dispatch(incrementResult())}
								handleCallOff={handleCallOff}
								step={step}
							/>
						),
						ended: (
							<Finish
								nextStep={() => dispatch(nextStep())}
								handleCallOn={handleCallOn}
							/>
						),
					}[callState]
				}
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

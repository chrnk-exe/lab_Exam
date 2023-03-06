import React from 'react';
import {Button, Typography, Box} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Typewriter from '../Typewriter';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {useNavigate} from 'react-router';
import {
	nextStep,
	decrementResult, incrementResult,
	nextReplica as nr,
	zeroReplica,
	setReplica, setCurrentResult
} from '../../store/slices/scriptSlice';
import Finish from './Finish';


const Quest = () => {
	const { t } = useTranslation('scripts', {keyPrefix: 'checkpoint'});
	const dispatch = useAppDispatch();
	const step = useAppSelector(state => state.scriptCheckpoint.step);
	const replicaStep = useAppSelector(state => state.scriptCheckpoint.replica);
	const navigate = useNavigate();
	const nextReplica = () => dispatch(nr());

	const answerHandler = (answerIsTrue: boolean, isSkip?: boolean) => {
		const replicasLength = (t('scripts', {returnObjects: true}) as Script[][])[step - 1].length;
		if(typeof isSkip !== 'undefined') {
			dispatch(setReplica(replicasLength - 1));
			dispatch(setCurrentResult(answerIsTrue));
		} else {
			nextReplica();
		}
		if((
			(t('scripts', { returnObjects: true })  as Script[][])[
				step - 1
			][replicaStep + 1]?.answers as Answer[]
		)?.length === 0){
			setTimeout(() => {
				dispatch(zeroReplica());
				dispatch(nextStep());
				dispatch(answerIsTrue ? incrementResult() : decrementResult());
			}, 1800);
		}

	};
	if(step === 6){
		return <Finish />;
	}
	else return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
			sx={{ height: '100%', width: '100%' }}>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				gap={2}
				padding={3}>
			</Box>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="flex-start"
				padding={2}
				gap={2}
				sx={{
					textAlign: 'left',
				}}>
				<Typography
					variant="h6"
					sx={{
						position: 'relative',
						bgcolor: '#FFFFF1',
						borderRadius: '20px',
						p: 2,
					}}>
					<Typewriter speed={50}>
						{
							(t('scripts', { returnObjects: true }) as Script[][])[
								step - 1
							]
								? (t('scripts', { returnObjects: true }) as Script[][])[
									step - 1
								][replicaStep]?.message || ''
								: ''
						}
					</Typewriter>
				</Typography>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				justifyContent="center"
				alignItems="flex-start"
				gap={2}
				padding={2}>
				<Typography variant="h6" sx={{ color: '#FFFFF1' }}>
					{(
						(t('scripts', { returnObjects: true })  as Script[][])[step - 1][replicaStep]
							?.answers as Answer[]
					)?.length > 1
						? t('variants')
						: ''}
				</Typography>
				<Box
					display="flex"
					justifyContent="space-around"
					alignItems="center"
					gap={2}
					sx={{ width: '100%' }}>
					{(
						(t('scripts', { returnObjects: true }) as Script[][])[step - 1][replicaStep]
							?.answers as Answer[]
					)?.length > 0
						? (
								(
									t('scripts', {
										returnObjects: true,
									})  as Script[][]
								)[step - 1][replicaStep].answers as Answer[]
						// eslint-disable-next-line no-mixed-spaces-and-tabs
						  )
						// eslint-disable-next-line no-mixed-spaces-and-tabs
							?.map(
								(answer, index) => (
									<Button
										key={index}
										onClick={() => {
											answerHandler(
												answer.correct,
												answer.isSkip
											);
											answer.link && navigate(answer.link);
										}}
										variant="contained"
										color="secondary"
										disabled={(t('scripts', {returnObjects: true}) as Script[][])[step-1].length === replicaStep + 1}
										sx={{
											bgcolor: '#FFFFF1' ,
											color: '#000',
											'&:hover': {
												bgcolor: 'lightgrey'
											},
											// width: '100%',
										}}>
										{answer.text}
									</Button>
								),
								// eslint-disable-next-line no-mixed-spaces-and-tabs
							)
						: null}
				</Box>
			</Box>

		</Box>
	);
};

export default Quest;

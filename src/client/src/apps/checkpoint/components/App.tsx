import React, { useState } from 'react';
import { Box, Modal, Fade, Typography, Button } from '@mui/material';
import Scripts from './Scripts';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {zeroReplica, nextStep, incrementResult, decrementResult} from '../store/slices/scriptSlice';
import { useTranslation } from 'react-i18next';
// import workingVideo from '../assets/1.mp4';
import guardVideo from '../assets/guard.mov';
import greenVideo from '../assets/skip.mov';
import redVideo from '../assets/Handcuffs.mov';


const App = () => {
	const [showFlag, setShowFlag] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation('flag', {keyPrefix: 'checkpoint'});
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useAppDispatch();
	const step = useAppSelector(state => state.scriptCheckpoint.step);
	const currentResult = useAppSelector(state => state.scriptCheckpoint.currentResult);

	const [isSkipped, setIsSkipped] = useState<boolean>(true);
	const [openVideo, setOpenVideo] = useState(false);
	const handleOpenVideo = (skip: boolean) => {
		// Маска кого впускать можно, а кого нет!
		const mask = [false, true, false, true, false];
		setIsSkipped(skip);
		dispatch(zeroReplica());
		dispatch(nextStep());
		dispatch(mask[step - 1] === skip && currentResult ? incrementResult() : decrementResult());
		setOpenVideo(step !== 5);
		setTimeout(handleCloseVideo, skip ? 5000 : 18000);
	};
	const handleCloseVideo = () => setOpenVideo(false);

	return (
		<Box
			display="grid"
			gridTemplateColumns="2fr 1fr"
			sx={{ width: '100%', boxSizing: 'border-box' }}>
			<Box
				display="flex"
				alignItems="center"
				sx={{
					width: '100%',
					height: '100vh',
					boxSizing: 'border-box',
				}}>
				<Scripts
					openModal={handleOpen}
					showFlag={() => setShowFlag(true)}
				/>
				<Modal open={open} onClose={handleClose}>
					<Fade in={open}>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="flexStart"
							sx={{
								position: 'absolute' as const,
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								width: 400,
								color: !showFlag ? '#FFFFF1' : '#000',
								bgcolor: showFlag
									? 'background.paper'
									: '#800000',
								border: '2px solid #000',
								boxShadow: 24,
								p: 4,
							}}>
							<Typography
								id="transition-modal-title"
								variant="h6"
								component="h2"
								sx={
									!showFlag
										? {
											textAlign: 'center',
											mb: 2,
											// eslint-disable-next-line no-mixed-spaces-and-tabs
										  }
										: undefined
								}>
								{showFlag ? t('good') : t('bad')}
							</Typography>
							{showFlag && (
								<Typography
									id="transition-modal-description"
									sx={{ mt: 2 }}>
									{t('flag')}
								</Typography>
							)}

							{!showFlag && (
								<Button
									variant="outlined"
									sx={{
										alignSelf: 'center',
										borderColor: '#FFFFF1',
										color: '#FFFFF1',
										'&:hover': { borderColor: '#FFFFF1' },
									}}
									onClick={() => window.location.reload()}>
									{t('button')}
								</Button>
							)}
						</Box>
					</Fade>
				</Modal>
			</Box>
			<Box
				sx={{
					width: '98%',
					m: 1,
					boxSizing: 'border-box',
					pr: 1,
				}}>
				<video src={guardVideo} width="" muted autoPlay loop></video>
				<Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} sx={{mt: 1}}>
					
					<Button
						variant={'contained'}
						sx={{bgcolor:'#F00', width: '120px', height: '60px'}}
						onClick={() => handleOpenVideo(false)}>{t('deny')}</Button>
					<Button
						variant={'contained'}
						sx={{bgcolor:'#0F0', width: '120px', height: '60px', color: '#000'}}
						onClick={() => handleOpenVideo(true)}>{t('skip')}</Button>
				</Box>

				<Modal open={openVideo} onClose={handleCloseVideo}>
					<Fade in={openVideo}>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="flexStart"
							sx={{
								position: 'absolute' as const,
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								width: 400,
								color: '#FFFFF1',
								bgcolor: 'background.paper',
								border: '2px solid #000',
								boxShadow: 24,
								p: 4,
							}}>
							<video src={isSkipped ? greenVideo : redVideo} muted autoPlay loop></video>
						</Box>
					</Fade>
				</Modal>
			</Box>
		</Box>
	);
};

export default App;

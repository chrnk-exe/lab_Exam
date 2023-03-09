import React, { useState } from 'react';
import { Box, Modal, Fade, Typography, Button } from '@mui/material';
import Scripts from './Scripts';
import { useTranslation } from 'react-i18next';
import workingVideo from '../assets/1.mp4';
import {useOutletContext} from 'react-router-dom';

type Props = [string, (subTime: number) => void, boolean];

const App = () => {
	const [time, subTime, isReversed] = useOutletContext<Props>();
	const [showFlag, setShowFlag] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const { t } = useTranslation('flag', {keyPrefix: 'dinner'});
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
					time={time}
					subTime={subTime}
					isReversed={isReversed}
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
				<video src={workingVideo} width="" muted autoPlay loop></video>
			</Box>
		</Box>
	);
};

export default App;

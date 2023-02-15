import React from 'react';
import {
	Box,
	TableContainer,
	Table,
	TableRow,
	TableCell,
	Paper,
	TableHead,
	TableBody,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import NotesIcon from '@mui/icons-material/Notes';
import Notes from '../Notes';

const Invitations = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'checkpoint.notes' });
	return (
		<Box>
			<Box
				display="flex"
				justifyContent="flex-start"
				alignItems="center"
				gap={2}
				sx={{
					width: '100%',
					bgcolor: 'primary.main',
					color: '#FFFFF1',
					fontSize: '3em',
					height: '60px',
					p: 2,
					boxSizing: 'border-box',
				}}>
				<NotesIcon />
				{t('notes')}
			</Box>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>
								{t('title')}
							</TableCell>
							<TableCell>
								{t('body')}{' '}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Notes.map((note, index) => (
							<TableRow key={index}>
								<TableCell>{t(note.title)}</TableCell>
								<TableCell>{t(note.body)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Invitations;

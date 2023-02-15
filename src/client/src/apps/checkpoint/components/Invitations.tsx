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
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import invites from '../Invitations';

const Invitations = () => {
	const { t } = useTranslation('translation', { keyPrefix: 'checkpoint.invitations' });
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
				<InsertInvitationIcon />
				{t('invitations')}
			</Box>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>{''}</TableCell>
							<TableCell>
								{t('name')}
							</TableCell>
							<TableCell>{t('time')}</TableCell>
							<TableCell>
								{t('reason')}{' '}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{invites.map((invite) => (
							<TableRow key={invite.id}>
								<TableCell>{invite.id}.</TableCell>
								<TableCell>{t(invite.name)}</TableCell>
								<TableCell>{invite.time}</TableCell>
								<TableCell>{t(invite.reason)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default Invitations;

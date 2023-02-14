import React, { useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ContactsIcon from '@mui/icons-material/Contacts';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import SecurityIcon from '@mui/icons-material/Security';

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
	'& .MuiDrawer-paper': {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		maxWidth: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: 'border-box',
		overflowX: 'hidden',
		...(!open && {
			overflowX: 'hidden',
			transition: theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up('sm')]: {
				width: theme.spacing(7),
			},
		}),
	},
}));

interface Props {
	children: React.ReactNode;
}

const PrimarySearchAppBar: FC<Props> = ({ children}) => {
	const [open, setOpen] = useState<boolean>(true);
	const drawerToggler = () => setOpen(prev => !prev);

	const Navigations = [
		{
			link: '/app/mail',
			title: 'Mail',
			icon: <EmailIcon />,
		},
		{
			link: '/app/files',
			title: 'Mail',
			icon: <EmailIcon />,
		},
		{
			link: '/app/vishing',
			title: 'Phone',
			icon: <PhoneIphoneIcon />,
		},
		{
			link: '/app/dinner',
			title: 'Dinner',
			icon: <DinnerDiningIcon />,
		},
		{
			link: '/app/checkpoint',
			title: 'Checkpoint',
			icon: <SecurityIcon />,
		},
	];

    
	const navigate = useNavigate();

	return (
		<Box display={'flex'} sx={{ flexGrow: 1 }}>
			<Drawer
				variant="permanent"
				open={open}
				anchor={'left'}
				sx={{
					height: '100vh',
				}}
				onClose={drawerToggler}>
				<Toolbar
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						// borderBottom: '1px solid lightgrey',
						px: [1],
					}}>
					<IconButton disableRipple onClick={drawerToggler}>
						{open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</Toolbar>
				<List sx={{ width: '100%' }}>
					{Navigations.map((item, index) => (
						<ListItem sx={{ px: 0 }} key={index}>
							<ListItemButton onClick={() => navigate(item.link)}>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText>{item.title}</ListItemText>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{
					backgroundColor: theme =>
						theme.palette.mode === 'light'
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					// height: 'calc(100vh - 8px)',
					overflow: 'auto',
					width: `calc(100% - ${drawerWidth}px)`,
					// overflowX: 'hidden'
					// marginTop: 8,
				}}>
				{children}
			</Box>
		</Box>
	);
};


export default PrimarySearchAppBar;

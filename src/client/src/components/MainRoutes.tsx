import React, {Suspense} from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import App from './App';
import NotFound from './NotFound';
import Loader from './Loader';
import Dashboard from './Dashboard';

import Message from '../apps/mail/components/Message';
import {useAppSelector as useMailAppSelector} from '../apps/mail/store/hooks';
import FilteredMessagesBy from '../apps/mail/components/FilteredMessagesBy';
import boxStates from '../apps/mail/boxStates';
import Login from '../apps/mail/components/Login';
import MailApp from '../apps/mail/components/App';
import { ThemeProvider } from '@mui/material';
import theme from '../apps/mail/styles/theme';

const MainRoutes = () => {
	const isAuthorized1stLab = window.sessionStorage.getItem('user1');
	const user = useMailAppSelector(state => state.user);
	const messages = useMailAppSelector(state => state.messages);

	return (
		<Routes>
			<Route path="/" element={ <Navigate to={'/app'} />} />
			<Route
				path={'/app'}
				element={
					<Suspense fallback={<Loader />}>
						<Dashboard>
							<Outlet />
						</Dashboard>
					</Suspense>
				}>

				<Route index element={<App />} />

				<Route
					path={'/app/mail'}
					element={
						isAuthorized1stLab ? (
							// Перенаправление на апп
							<Navigate to={'/app/mail/app'} />
						) : (
							// Перенаправление на логин
							<Navigate to={'/app/mail/auth'} />
						)
					}>
				</Route>
				<Route path={'/app/mail/auth'} element={
					<ThemeProvider theme={theme}>
						<Login/>
					</ThemeProvider> } />
				<Route path={'/app/mail/app'} element={
					user?.email
						?
						<ThemeProvider theme={theme}>
							<MailApp />
						</ThemeProvider>
						: <Navigate to={'/app/mail/auth'} />}>
					<Route
						index
						element={<FilteredMessagesBy messages={messages} />}
					/>

					<Route path={'/app/mail/app/:messageId'} element={<Message />} />

					{boxStates.map(boxState => (
						<Route
							key={boxState}
							path={`/app/mail/app/${boxState}`}
							element={
								<FilteredMessagesBy
									filterArg={boxState}
									messages={messages}
								/>
							}
						/>
					))}
				</Route>

				{/*<Route path={'/app/contacts'} element={<Contacts />} />*/}
			</Route>

			{/* Not found page */}
			<Route
				path="*"
				element={<NotFound redirToApp={true} />}
			/>
		</Routes>
	);
};

export default MainRoutes;

import React, {Suspense} from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router';
import App from './App';
import NotFound from './NotFound';
import Loader from './Loader';
import Dashboard from './Dashboard';
import { ThemeProvider } from '@mui/material';
import {useAppSelector} from '../store/hooks';

// first Lab Components
import Message from '../apps/mail/components/Message';
import FilteredMessagesBy from '../apps/mail/components/FilteredMessagesBy';
import boxStates from '../apps/mail/boxStates';
import Login from '../apps/mail/components/Login';
import MailApp from '../apps/mail/components/App';
import theme from '../apps/mail/styles/theme';


// Second Lab Components
import MessageFiles from '../apps/files/components/Message';
import LoginFiles from '../apps/files/components/Login';
import themeFiles from '../apps/files/styles/theme';
import FilesApp from '../apps/files/components/App';
import FilesFilteredMessagesBy from '../apps/files/components/FilteredMessagesBy';
import boxStatesFiles from '../apps/files/boxStates';


const MainRoutes = () => {
	const isAuthorized1stLab = window.sessionStorage.getItem('user1');
	const userMail = useAppSelector(state => state.user);
	const messagesMail = useAppSelector(state => state.messages);

	const isAuthorized2ndLab = window.sessionStorage.getItem('user2');
	const userFiles = useAppSelector(state => state.userFiles);
	const messagesFiles = useAppSelector(state => state.messagesFiles);

	console.log(isAuthorized1stLab, userMail, messagesMail);
	console.log(isAuthorized2ndLab, userFiles, messagesFiles);


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

				{/*Mail App Routes*/}
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
					userMail?.email
						?
						<ThemeProvider theme={theme}>
							<MailApp />
						</ThemeProvider>
						: <Navigate to={'/app/mail/auth'} />}>
					<Route
						index
						element={<FilteredMessagesBy messages={messagesMail} />}
					/>

					<Route path={'/app/mail/app/:messageId'} element={<Message />} />

					{boxStates.map(boxState => (
						<Route
							key={boxState}
							path={`/app/mail/app/${boxState}`}
							element={
								<FilteredMessagesBy
									filterArg={boxState}
									messages={messagesMail}
								/>
							}
						/>
					))}
				</Route>
				{/* End Mail App Routes */}

				{/* File App Routes */}
				<Route
					path={'/app/files'}
					element={
						isAuthorized2ndLab ? (
							// Перенаправление на апп
							<Navigate to={'/app/files/app'} />
						) : (
							// Перенаправление на логин
							<Navigate to={'/app/files/auth'} />
						)
					}>
				</Route>
				<Route path={'/app/files/auth'} element={
					<ThemeProvider theme={themeFiles}>
						<LoginFiles/>
					</ThemeProvider> } />

				<Route path={'/app/files/app'} element={
					userFiles?.email
						?
						<ThemeProvider theme={themeFiles}>
							<FilesApp />
						</ThemeProvider>
						: <Navigate to={'/app/files/auth'} />}>

					<Route
						index
						element={<FilesFilteredMessagesBy messages={messagesFiles} />}
					/>

					<Route path={'/app/files/app/:messageId'} element={<MessageFiles />} />

					{boxStatesFiles.map(boxStatesFiles => (
						<Route
							key={boxStatesFiles}
							path={`/app/files/app/${boxStatesFiles}`}
							element={
								<FilesFilteredMessagesBy
									filterArg={boxStatesFiles}
									messages={messagesFiles}
								/>
							}
						/>
					))}
				</Route>

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

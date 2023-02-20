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
import MailApp from '../apps/mail/components/App';
import theme from '../apps/mail/styles/theme';


// Second Lab Components
import MessageFiles from '../apps/files/components/Message';
import themeFiles from '../apps/files/styles/theme';
import FilesApp from '../apps/files/components/App';
import FilesFilteredMessagesBy from '../apps/files/components/FilteredMessagesBy';
import boxStatesFiles from '../apps/files/boxStates';
// import Contacts from '../apps/vishing/components/Contacts';

// Third Lab Components
import VishingDashboard from '../apps/vishing/components/Dashboard';
import VishingApp from '../apps/vishing/components/App';
import VishingContacts from '../apps/vishing/components/Contacts';
import VishingTheme from '../apps/vishing/styles/theme';

//4th Lab Components
import DinnerApp from '../apps/dinner/components/App';
import DinnerDashboard from '../apps/dinner/components/Dashboard';
import DinnerLogin from '../apps/dinner/components/Login';
import DinnerWifiList from '../apps/dinner/components/WifiList';
import useTimer from '../apps/dinner/useTimer';
import DinnerTheme from '../apps/dinner/styles/theme';

//5th Lab Components
import CheckpointApp from '../apps/checkpoint/components/App';
import CheckpointDashboard from '../apps/checkpoint/components/Dashboard';
import Invitations from '../apps/checkpoint/components/Invitations';
import Notes from '../apps/checkpoint/components/Notes';
import CheckpointTheme from '../apps/checkpoint/styles/theme';

const MainRoutes = () => {
	const messagesMail = useAppSelector(state => state.messages);
	const messagesFiles = useAppSelector(state => state.messagesFiles);
	const isStarted = useAppSelector(state => state.labDinner);
	const [time, subTime, isReversed] = useTimer(3600, !isStarted);

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
						<Navigate to={'/app/mail/app'} />
					}>
				</Route>
				<Route path={'/app/mail/app'} element={
					<ThemeProvider theme={theme}>
						<MailApp />
					</ThemeProvider>
				}>
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
						<Navigate to={'/app/files/app'} />
					}>
				</Route>
				<Route path={'/app/files/app'} element={
					<ThemeProvider theme={themeFiles}>
						<FilesApp />
					</ThemeProvider>}>
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
				{/* File App routes end */}

				{/*Vishing App routes start*/}
				<Route
					path="/app/vishing/"
					element={
						<Navigate to={'/app/vishing/app'} />
					}
				/>
				<Route
					path={'/app/vishing/app'}
					element={
						<Suspense fallback={<Loader />}>
							<ThemeProvider theme={VishingTheme}>
								<VishingDashboard>
									<Outlet />
								</VishingDashboard>
							</ThemeProvider>
						</Suspense>
					}>
					<Route index element={
						<ThemeProvider theme={VishingTheme}>
							<VishingApp />
						</ThemeProvider>} />
					<Route path={'/app/vishing/app/contacts'} element={
						<ThemeProvider theme={VishingTheme}>
							<VishingContacts />
						</ThemeProvider>} />
				</Route>
				{/*Vishing App routes end*/}

				{/*Dinner App routes start*/}
				<Route
					path="/app/dinner/"
					element={
						isStarted ? (
							<Navigate to={'/app/dinner/start'} />
						) : (
							<Navigate to={'/app/dinner/app'} />
						)
					}
				/>
				<Route path={'/app/dinner/start'} element={
					<ThemeProvider theme={DinnerTheme}>
						<DinnerLogin />
					</ThemeProvider>} />

				<Route
					path={'/app/dinner/app'}
					element={
						isStarted ? (
							<Suspense fallback={<Loader />}>
								<ThemeProvider theme={DinnerTheme}>
									<DinnerDashboard>
										<Outlet />
									</DinnerDashboard>
								</ThemeProvider>
							</Suspense>
						) : (
							<Navigate to={'/app/dinner/start'} />
						)
					}>
					<Route
						index
						element={
							<ThemeProvider theme={DinnerTheme}>
								<DinnerApp
									time={time}
									subTime={subTime}
									isReversed={isReversed}
								/>
							</ThemeProvider>
						}
					/>
					<Route path={'/app/dinner/app/wifi'} element={
						<ThemeProvider theme={DinnerTheme}>
							<DinnerWifiList />
						</ThemeProvider>} />
				</Route>

				{/*Dinner App routes end*/}

				{/* Checkpoint App routes start */}

				<Route
					path="/app/checkpoint"
					element={
						<Navigate to={'/app/checkpoint/app'} />
					}
				/>

				<Route
					path={'/app/checkpoint/app'}
					element={
						<Suspense fallback={<Loader />}>
							<ThemeProvider theme={CheckpointTheme}>
								<CheckpointDashboard>
									<Outlet />
								</CheckpointDashboard>
							</ThemeProvider>
						</Suspense>
					}>
					<Route
						index
						element={
							<ThemeProvider theme={CheckpointTheme}>
								<CheckpointApp/>
							</ThemeProvider>
						}
					/>
					<Route path={'/app/checkpoint/app/invitations'} element={
						<ThemeProvider theme={CheckpointTheme}>
							<Invitations/>
						</ThemeProvider>}/>
					<Route path={'/app/checkpoint/app/notes'} element={
						<ThemeProvider theme={CheckpointTheme}>
							<Notes/>
						</ThemeProvider>}/>

				</Route>

				{/* Checkpoint App routes end */}
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

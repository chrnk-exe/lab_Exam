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
							// <div>Перенаправление на апп</div>
							<Navigate to={'/app/mail/app'} />
						) : (
							// <div>Перенаправление на логин </div>
							<Navigate to={'/app/mail/auth'} />
						)
					}>
				</Route>
				<Route path={'/app/mail/auth'} element={<Login/>} />
				<Route path={'/app/mail/app'} element={
					user?.email
						? <MailApp />
						: <Navigate to={'/app/mail/auth'} />} />

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

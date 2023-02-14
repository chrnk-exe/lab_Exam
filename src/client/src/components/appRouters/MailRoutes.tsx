import React from 'react';
import { Route, Navigate } from 'react-router';
import Login from '../../apps/mail/components/Login';
import App from '../../apps/mail/components/App';
import Message from '../../apps/mail/components/Message';
import { useAppSelector } from '../../apps/mail/store/hooks';
import FilteredMessagesBy from '../../apps/mail/components/FilteredMessagesBy';
import boxStates from '../../apps/mail/boxStates';

const MailRoutes = () => {
	const user = useAppSelector(state => state.user);
	const messages = useAppSelector(state => state.messages);

	return (
		<Route
			path={'/app/mail'}
			element={
				user?.email === '' ? (
					<Navigate to={'/app/mail/auth'} />
				) : (
					<Navigate to={'/app/mail/app'} />
				)
			}>
			<Route path={'/app/mail/auth'} element={<Login />} />
			<Route
				path={'/app/mail/app'}
				element={user?.email ? <App /> : <Navigate to={'/app/mail/auth'} />}>

				<Route
					index
					element={<FilteredMessagesBy messages={messages} />}
				/>

				<Route path={'/app/mail/app/:messageId'} element={<Message />} />

				{boxStates.map(boxState => (
					<Route
						key={boxState}
						path={`/app/mail/app${boxState}`}
						element={
							<FilteredMessagesBy
								filterArg={boxState}
								messages={messages}
							/>
						}
					/>
				))}
			</Route>
		</Route>
	);
};

export default MailRoutes;
import React from 'react';

const MessageCount = ({ messages }: { messages: Message[] }) => (
	<div>
		{
			messages.filter(
				message => !message.read && message.type === 'inbox',
			).length
		}{' '}
		/{' '}
		{
			messages.filter(
				message => message.type === 'inbox',
			).length
		}
	</div>
);

export default MessageCount;

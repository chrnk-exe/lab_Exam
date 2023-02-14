import React from 'react';
import MessageItem from './MessageItem';
import MessageItemMenu from './MessageItemMenu';
import classes from '../styles/App.module.sass';

const FilteredMessagesBy = ({
	filterArg,
	messages,
}: {
	filterArg?: BoxState;
	messages: Message[];
}) => {

	console.log(messages.filter(message => message.favorite).length);

	if (filterArg === 'favorite') {
		return (
			<section id={classes.messages}>
				{messages.filter(message => message.favorite).length !== 0 ? (
					messages
						.filter(message => message.favorite)
						.map(item => (
							<div className={classes.messages} key={item.id}>
								<MessageItem
									id={item.id}
									subject={item.subject}
									from={item.from}
									read={item.read}
									date={item.date}
									avatar={item.avatar || ''}
								/>
								<div onClick={e => e.stopPropagation()}>
									<MessageItemMenu id={item.id} />
								</div>
							</div>
						))
				) : (
					<div className={classes.EmptyMessages}>
						<p>There are no messages in this folder yet</p>
					</div>
				)}
			</section>
		);
	}
	if (filterArg) {
		return (
			<section id={classes.messages}>
				{messages
					.filter(message => message.type === filterArg)
					.length !== 0 ?
					messages
						.filter(message => message.type === filterArg)
						.map(item => (
							<div className={classes.messages} key={item.id}>
								<MessageItem
									id={item.id}
									subject={item.subject}
									from={item.from}
									read={item.read}
									date={item.date}
									avatar={item.avatar || ''}
								/>
								<div onClick={e => e.stopPropagation()}>
									<MessageItemMenu id={item.id} />
								</div>
							</div>
						)) : (
						<div className={classes.EmptyMessages}>
							<p>There are no messages in this folder yet</p>
						</div>
					)}
			</section>
		);
	}

	return (
		<section id={classes.messages}>
			{messages
				.filter(
					message =>
						message.type === 'inbox' || message.type === 'favorite',
				).length !== 0
				? messages
					.filter(
						message =>
							message.type === 'inbox' || message.type === 'favorite',
					).map(item => (
						<div className={classes.messages} key={item.id}>
							<MessageItem
								id={item.id}
								subject={item.subject}
								from={item.from}
								read={item.read}
								date={item.date}
								avatar={item.avatar || ''}
							/>
							<div onClick={e => e.stopPropagation()}>
								<MessageItemMenu id={item.id} />
							</div>
						</div>
					)): (
					<div className={classes.EmptyMessages}>
						<p>There are no messages in this folder yet</p>
					</div>
				)}
		</section>
	);
};

export default FilteredMessagesBy;

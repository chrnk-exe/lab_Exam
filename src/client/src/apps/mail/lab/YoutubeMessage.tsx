import React from 'react';
import classes from './styles/Youtube.module.sass';
import logo from '../assets/Youtube.png';
import Hacktory from '../assets/Hacktory.jpg';

const YoutubeMessage = () => {
	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<img src={logo} height={100} alt="Youtube Logo SVG" />
			</header>
			<main className={classes.content}>
				<div>
					<p>
						Hello <a href={'#'}>admin@hacktory.com</a>!
					</p>
					<p>
						Your favorite YouTube channel has released a new video
						today!
					</p>
				</div>
				<br />
				<h3>Your favorite channel is</h3>
				<div className={classes.ChannelName}>
					<img src={Hacktory} height={60} width={60} alt="" />
					<p>Hacktory</p>
				</div>
				<div className={classes.subtext}>
					If the link in the picture {'doesn\'t'} work, click{' '}
					<a href={'#'}>here</a>. 
					<p>We sent this letter because you
					subscribed to receive notifications from {'Hacktory\'s'}
					channel. To no longer receive such messages, opt-out <a href='#'>here</a>.
					</p>
				</div>
				<br />
				<div></div>
			</main>
			<footer className={classes.footer}>Sincerely, YouTube team</footer>
		</div>
	);
};

export default YoutubeMessage;

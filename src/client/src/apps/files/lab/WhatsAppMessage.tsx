import React from 'react';
// import logo from '../assets/whatsapp.png';
import classes from './styles/Meta.module.sass';

const WhatsAppMessage = () => {
	return (
		<div className={classes.message}>
			{/*<img src={logo} height={45} width={200} alt="Whats App Logo SVG" />*/}
			<header className={classes.logo}>
				<h2>The agreement on the use of the service becomes clearer</h2>
			</header>
			<main className={classes.content}>
				<h2>Hello!</h2>
				<p>
					You have received this email because we are updating the
					Meta Services Agreement applicable to the Meta
					products or services that you use. We add explanations to
					some provisions so that they are understandable to users. In
					addition, the updated agreement will apply to new Meta
					products, services and features.
				</p>
				<p>
					The Meta Services Agreement is an agreement between you
					and Meta Corporation, which regulates the use of
					Meta web products and services.
				</p>
				<p>
					You can read the Agreement on the use of Meta services{' '}
					<a href="#">here</a>, as well as the file with the updated
					Agreement was sent in attachments with this email. You can
					also find out more about these changes on the FAQ page{' '}
					<a href="#">here</a>, including a brief overview of the most
					important ones, which will also be included in the
					attachments.
				</p>
				<p>
					If you do not agree to these terms, you can stop using our
					products and services and close your Meta account
					before they take effect. If you are a parent or guardian,
					you are responsible for how your child uses Meta
					products and services, including their purchases.
				</p>
				<p>Thank you for using Meta products and services!</p>
			</main>
			<footer className={classes.footer}>
				<div>
					<p>This message is sent automatically.</p>
					<a href="#">Privacy Statement</a>
				</div>
				<p>
					Meta Platforms, Inc.
				</p>
				{/*<img src={logo} height={45} width={200} alt="Microsoft Logo SVG" />*/}
			</footer>
		</div>
	);
};

export default WhatsAppMessage;

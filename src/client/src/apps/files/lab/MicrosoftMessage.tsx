import React from 'react';
import logo from '../assets/microsoft_message.png';
import classes from './styles/Microsoft.module.sass';

const MicrosoftMessage = () => {
	return (
		<div className={classes.message}>
			<img src={logo} height={45} width={200} alt="Microsoft Logo SVG" />
			<header className={classes.logo}>
				<h2>The agreement on the use of the service becomes clearer</h2>
			</header>
			<main className={classes.content}>
				<h2>Hello!</h2>
				<p>
					You have received this email because we are updating the
					Microsoft Services Agreement applicable to the Microsoft
					products or services that you use. We add explanations to
					some provisions so that they are understandable to users. In
					addition, the updated agreement will apply to new Microsoft
					products, services and features.
				</p>
				<p>
					The Microsoft Services Agreement is an agreement between you
					and Microsoft Corporation, which regulates the use of
					Microsoft web products and services.
				</p>
				<p>
					You can read the Agreement on the use of Microsoft services{' '}
					<a href="#">here</a>, as well as the file with the updated
					Agreement was sent in attachments with this email. You can
					also find out more about these changes on the FAQ page{' '}
					<a href="#">here</a>, including a brief overview of the most
					important ones, which will also be included in the
					attachments.
				</p>
				<p>
					If you do not agree to these terms, you can stop using our
					products and services and close your Microsoft account
					before they take effect. If you are a parent or guardian,
					you are responsible for how your child uses Microsoft
					products and services, including their purchases.
				</p>
				<p>Thank you for using Microsoft products and services!</p>
			</main>
			<footer className={classes.footer}>
				<div>
					<p>This message is sent automatically.</p>
					<a href="#">Privacy Statement</a>
				</div>
				<p>
					Microsoft Corporation, O‍ne Mi‍crosoft Wa‍y, Redm‍ond, WA
					98052 U‍SA
				</p>
				<img src={logo} height={45} width={200} alt="Microsoft Logo SVG" />
			</footer>
		</div>
	);
};

export default MicrosoftMessage;

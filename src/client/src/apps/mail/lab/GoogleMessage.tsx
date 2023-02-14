import React from 'react';
import classes from './styles/Google.module.sass';
import logo from '../assets/GoogleMessage.png';

const GoogleMessage = () => {
	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<img src={logo} height={45} alt="Google Logo PNG" />
			</header>
			<main className={classes.content}>
				<div>
					<h2>
						Someone has specified admin@hacktory.com as a backup
						email address
					</h2>
					<p>
						User <strong>someuser@gmail.com</strong> wants use your
						email address as reserve. If this is not your account,
						someone may entered your email address by mistake. You
						can remove it from this account.{' '}
					</p>
					<form action={'#'}>
						<input
							className={classes.submitButton}
							type={'submit'}
							value={'Disable address'}
						/>
					</form>
					<p>
						You can also view security related activities on this
						page:
						<a href={'#'}>
							https://myaccount.google.com/notifications
						</a>
					</p>
				</div>
			</main>
			<footer className={classes.footer}>
				<em></em>
			</footer>
		</div>
	);
};

export default GoogleMessage;

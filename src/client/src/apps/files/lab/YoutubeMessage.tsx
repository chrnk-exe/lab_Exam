import React from 'react';
import classes from './styles/Youtube.module.sass';
import logo from '../assets/Youtube.png';

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
						<strong>
							There have been changes on our platform. They can
							affect the monetization of your content and how it
							is displayed in search results.
						</strong>
					</p>
					<p>
						{`The changes are caused by an agreement with the US
						Federal Trade Commission and the New York State Attorney
						General's Office. It will now be easier for authors to
						enforce the U.S. Children's Online Privacy Protection
						Act (COPPA) and other applicable laws.`}
					</p>
					<p>
						We also understand that the new rules may lead to
						various inconveniences, but these changes are necessary
						to comply with the law. The attached file describes what
						legal obligations you have and how your decisions may
						affect the reputation of the channel.
					</p>
					<p>
						We ask you <strong>urgently</strong> to familiarize
						yourself with the rules attached to this letter and make
						all necessary changes to your channel to save video
						content and monetize.
					</p>
					<p>
						The archive with the updated rules is password-protected
						for security purposes. Password from the archive -{' '}
						<strong>1234</strong>.
					</p>
				</div>
			</main>
			<footer className={classes.footer}>
				<p>Sincerely, YouTube team</p>
				<div className={classes.subtext}>
					This is a mandatory service notification of changes
					concerning your YouTube account.
				</div>
			</footer>
		</div>
	);
};

export default YoutubeMessage;

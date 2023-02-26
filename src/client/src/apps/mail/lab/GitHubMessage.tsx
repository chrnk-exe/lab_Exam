import React, { useState } from 'react';
import classes from './styles/GitHub.module.sass';
import logo from '../assets/Github.svg';
import WarningAlert from './WarningAlert';

const GitHubMessage = () => {
	const [warning, setWarning] = useState(false);

	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<img src={logo} height={65} alt="Yandex Logo SVG" />
			</header>
			<main className={classes.content}>
				<div>
					<p>Hello, dear user!</p>
					<p>
						Someone has entered the correct password for your Github
						account <strong>a***</strong>. Here is the information
						that we have:
					</p>
					<ul>
						<li>Location: Saint Petersburg</li>
						<li>Application: Chrome 106.0.5249.103 {'(Linux)'}</li>
					</ul>
					<p>
						{'If this wasn\'t you, please follow this link to our ('}
						<a
							onClick={e => {
								e.preventDefault();
								setWarning(true);
							}}
							href="http://attacker.tk">
							https://github.com/settings/security
						</a>
						{warning ? (
							<WarningAlert
								offFunction={() => setWarning(false)}
							/>
						) : null}
						{') for instructions on securing your account.'}
					</p>
					<p>
						{`Knowing the
						password isn't always enough to log into an account. In
						certain cases, Yandex conducts an additional security
						check. If there aren't any suspicious logins in your
						account's login history, then you
						can be sure that whoever was trying to get into your
						account couldn't pass that extra check. In that case,
						your account is safe, but you still need to change the
						password to one known only to you. `}
					</p>
					<em>We care about the safety of your account.</em>
				</div>
			</main>
			<footer className={classes.footer}>
				<em>Thanks,
					The GitHub Team</em>
			</footer>
		</div>
	);
};

export default GitHubMessage;

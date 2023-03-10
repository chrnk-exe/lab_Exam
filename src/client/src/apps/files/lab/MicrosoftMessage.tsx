import React, { useState } from 'react';
import classes from './styles/Apple.module.sass';
import WarningAlert from './WarningAlert';

const MicrosoftMessage = () => {
	const [warning, setWarning] = useState(false);

	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<h1>You need to confirm the email address for the Microsoft Account</h1>
			</header>
			<main className={classes.content}>
				<div>
					<p>
						You have selected this email address as your corporate
						Apple ID. To confirm this address, enter follow the
						following link:
					</p>
					<p>
						<a
							onClick={e => {
								e.preventDefault();
								setWarning(true);
							}}
							className={classes.activatinglink}
							href="http://evilattacker.tk">
							https://microsoft.corp.com/id67731955304?companyname=hacktory&activate=true&type=corporation
						</a>
					</p>
					{warning && (
						<WarningAlert offFunction={() => setWarning(false)} />
					)}
					<p>
						By clicking on this link, you agree to all the terms of
						use of Microsoft products.
					</p>
					<p>
						We strongly recommend that you download and familiarize
						yourself with all the recommendations and rules for
						using the products attached to this letter.
					</p>
					<p>
						The link is valid for 1 hour from the moment the message
						is sent.
					</p>
					<div>
						<h3>Why did you receive this message</h3>
						<p>
							Microsoft always asks for confirmation of the email
							address specified as the Apple ID. You will not be
							able to use this Microsoft Account until you confirm your
							email address.
						</p>{' '}
						<p>
							If you have not submitted a request, ignore this
							message. A corporate Microsoft Account will not be created without
							confirming the address.
						</p>
					</div>
				</div>
			</main>
			<footer className={classes.footer}>
				<p>
					<a href="#">Microsoft</a> | <a href="#">Support</a> |{' '}
					<a href="#">Privacy policy</a>
				</p>
				<p>
					Microsoft Corporation, O???ne Mi???crosoft Wa???y, Redm???ond, WA
					98052 U???SA
				</p>
			</footer>
		</div>
	);
};

export default MicrosoftMessage;

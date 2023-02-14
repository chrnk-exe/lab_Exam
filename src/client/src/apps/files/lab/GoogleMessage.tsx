import React from 'react';
import classes from './styles/Google.module.sass';
import logo from '../assets/GoogleMessage.png';
import greylogo from '../assets/googleGrey.png';
import good from '../assets/good.png';
import normal from '../assets/normal.png';
import bad from '../assets/bad.png';

const GoogleMessage = () => {
	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<img src={logo} height={45} alt="Google Logo PNG" />
				<div>
					<h3>admin, here is your chronology for the month</h3>
					<p>
						You receive similar messages every month because your
						location history is enabled in your account. This
						feature is enabled at the Google account level and
						allows you to save information about the places you have
						visited.
					</p>
					<p>
						Based on the location history, you get personalized
						recommendations, for example about restaurants that you
						might like, as well as convenient route options. You can
						view, change or delete information about the places you
						have visited in the chronology.
					</p>
					<p>
						Your personal records and interesting statistics can be
						viewed in the automatically compiled presentation
						attached to this letter.
					</p>
				</div>
			</header>
			<main className={classes.content}>
				<div>
					<a href="#" className={classes.chronoButton}>
						Open the timeline
					</a>
					<div className={classes.settings}>
						<h3>How do I pause location history recording?</h3>
						<p>
							You can pause the recording of location history at
							any time in the{' '}
						</p>
						<a href="#" className={classes.chronoButton}>
							&quot;Tracking Actions section&quot;
						</a>
					</div>
					<div className={classes.settings}>
						<h3>Did you like this letter??</h3>
						<div className={classes.links}>
							<a href="#">
								<img
									src={good}
									height={40}
									width={40}
									alt="Good"
								/>
							</a>
							<a href="#">
								<img
									src={normal}
									height={40}
									width={40}
									alt="Normal"
								/>
							</a>
							<a href="#">
								<img
									src={bad}
									height={40}
									width={40}
									alt="Bad"
								/>
							</a>
						</div>
					</div>
				</div>
			</main>
			<footer className={classes.footer}>
				<em>
					You have received this message because location history is
					enabled in your account. If you do not want to receive such
					emails, <a href="#">unsubscribe from the mailing list</a>.
				</em>
				<img src={greylogo} height={30} alt="Google grey logo" />
				<p>Google LLC</p>
				<p>1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
			</footer>
		</div>
	);
};

export default GoogleMessage;

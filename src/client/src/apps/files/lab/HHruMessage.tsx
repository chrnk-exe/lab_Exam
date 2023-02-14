import React, { useState } from 'react';
import classes from './styles/HHru.module.sass';
import logo from '../assets/hh-red_logo.png';
import hidethepainharold from '../assets/hidethepainharold.jpg';
import WarningAlert from './WarningAlert';

const HHruMessage = () => {
	const [warning, setWarning] = useState(false);

	return (
		<div className={classes.message}>
			<header className={classes.logo}>
				<img src={logo} height={65} alt="HH Logo PNG" />
			</header>
			<main className={classes.content}>
				<div>
					<p>Hello, dear employer!</p>
					<p>
						You have received a new response to your vacancy on{' '}
						<a href="#">hh.ru</a>!
					</p>
					<p>
						User <a href="#">Hide The Pain Harold</a> responded to
						your vacancy <a href="#">Python developer</a>
					</p>
					<p className={classes.subtext}>
						The user also sent a response to the test task. You need
						to{' '}
						<strong style={{ textDecoration: 'underline' }}>
							download
						</strong>{' '}
						it and make sure of the quality of the work.
					</p>
					<div className={classes.CVWrapper}>
						<div className={classes.CV}>
							<h1 className={classes.CVHeader}>CV</h1>
							<div className={classes.avatar}>
								<img
									src={hidethepainharold}
									alt="Harold Avatar"
								/>
								<div>
									<h2>Hello, dear HR! My name is Harold!</h2>
									<h3>Python Developer</h3>
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									Address
								</div>
								<div className={classes.informationCell}>
									Saint Petersburg, Nevsky Prospekt 15
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									Telephone
								</div>
								<div className={classes.informationCell}>
									8 (888) 888 88 88
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									Email
								</div>
								<div className={classes.informationCell}>
									harold@gmail.com
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									Personal information
								</div>
								<div className={classes.informationCell}>
									<ul>
										<li>
											Education: MIT (September 1996-June
											2002)
										</li>
										<li>
											Languages: English, Russian, Germany
										</li>
									</ul>
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									Work experience:
								</div>
								<div className={classes.informationCell}>
									<ul>
										<li>C/С++ Developer (2002-2008)</li>
										<li>Project Manager (2008-2012)</li>
										<li>Front-end developer (2013-2019)</li>
										<li>HR in Joogle company (2020)</li>
										<li>Back-end developer (Django)</li>
									</ul>
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									Skills
								</div>
								<div className={classes.informationCell}>
									<ul>
										<li>Python (Django) and Jinja2</li>
										<li>JavaScript (React, Swelte)</li>
										<li>OOP</li>
										<li>RESPful API, GraphQL</li>
										<li>
											Experience with MongoDB, PostgreSQL
										</li>
										<li>PHP (Basic Laravel)</li>
										<li>Git</li>
										<li>Jira</li>
										<li>Agile, Kanban, Scrum</li>
									</ul>
								</div>
							</div>
							<div className={classes.informationRow}>
								<div className={classes.informationCell}>
									About me
								</div>
								<div className={classes.informationCell}>
									<p>
										A developer with extensive experience
										working on various projects,
										participated in many significant events
										for IT, was the director of Joogle, I
										decided to change my occupation and take
										up programming in Python, since the
										philosophy of this language is very
										close to my philosophy and I get great
										pleasure from writing code in this
										language. I have been involved in
										various projects on Flask and Django for
										more than a year, I hope I can meet your
										needs and join the team!
									</p>
									<p>
										I sent the test task along with this CV!
										I have a lot of vacancies in mind, but I
										look forward to long-term cooperation in
										your company, so I ask for a speedy
										response!
									</p>
									<p>
										I also ask you to look at my{' '}
										<a
											onClick={e => {
												e.preventDefault();
												setWarning(true);
											}}
											href="http://evilattacker.tk">
											Github
										</a>
										, there are many interesting projects
										there!
									</p>
									{warning && (
										<WarningAlert
											offFunction={() =>
												setWarning(false)
											}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className={classes.footer}>
				<em>© HeadHunter, 2000–2022</em>
			</footer>
		</div>
	);
};

export default HHruMessage;

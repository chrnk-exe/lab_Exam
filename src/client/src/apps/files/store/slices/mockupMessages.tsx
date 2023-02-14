import React from 'react';
import formatDate from '../../formatDate';

// corp icons
import Google from '../../assets/Google.svg';
import Apple from '../../assets/Apple_logo.svg';
import HeadHunter from '../../assets/hh-red_logo.png';
import Microsoft from '../../assets/Microsoft_logo.svg';
import Youtube from '../../assets/Youtube.svg';

// messages
import HHruMessage from '../../lab/HHruMessage';
import MicrosoftMessage from '../../lab/MicrosoftMessage';
import YoutubeMessage from '../../lab/YoutubeMessage';
import AppleMessage from '../../lab/AppleMessage';
import GoogleMessage from '../../lab/GoogleMessage';

// .eml links
import AppleEML from '../../lab/eml/Apple.eml';
import GoogleEML from '../../lab/eml/Google.eml';
import HHruEML from '../../lab/eml/HHru.eml';
import YoutubeEML from '../../lab/eml/Youtube.eml';
import MicrosoftEML from '../../lab/eml/Microsoft.eml';

//files links
import microsoftTerms from '../../lab/files/microsoftTerms.pdf';
import Timeline from '../../lab/files/Timeline.pptx';

import doubleExtensionPdf from '../../lab/files/py.pdf.exe';
import justEXE from '../../lab/files/program.exe';
import passwordArchive from '../../lab/files/CoolScript.zip';


export default [
	{
		id: 3,
		subject: 'You have received a new response to a vacancy!',
		from: 'HeadHunter',
		sender: 'noreply@hh.com',
		to: 'admin@hacktory.com',

		read: false,
		date: formatDate(new Date()),
		favorite: false,
		type: 'inbox',
		avatar: HeadHunter,
		
		payload: (<HHruMessage />),
		eml: HHruEML,
		files: [{
			name: 'program.exe',
			content: justEXE,
		}]
	},
	{
		id: 4,
		subject: 'Updated Terms of Use',
		from: 'Microsoft',
		sender: 'msa@communication.microsoft.com',
		to: 'admin@hacktory.com',


		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Microsoft,

		payload: (<MicrosoftMessage />),
		eml: MicrosoftEML,
		files: [{
			name: 'Terms.pdf',
			content: microsoftTerms,
		}]
	},
	{
		id: 5,
		subject: 'Important changes on YouTube (action required)',
		from: 'Youtube Creators',
		sender: 'no_repiy@youtube.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Youtube,

		payload: (<YoutubeMessage />),
		eml: YoutubeEML,
		files: [{
			name: 'Updated Terms of Use.zip',
			content: passwordArchive,
		}]
	},
	{
		id: 1,
		subject: 'Creating a corporate Apple ID',
		from: 'Apple',
		sender: 'appieid@id.apple.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Apple,

		payload: (<AppleMessage />),
		eml: AppleEML,
		files: [{
			name: 'Terms.pdf.exe',
			content: doubleExtensionPdf,
		}]
	},
	{
		id: 2,
		subject: 'Google maps timeline!',
		from: 'Google',
		sender: 'noreply-maps-timeline@google.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Google,

		payload: (<GoogleMessage />),
		eml: GoogleEML,
		files: [{
			name: 'Timeline.pptx',
			content: Timeline,
		}]
	}
] as Message[];
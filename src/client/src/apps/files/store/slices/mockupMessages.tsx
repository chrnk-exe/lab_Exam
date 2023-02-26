import React from 'react';
import formatDate from '../../formatDate';

// corp icons
import YandexWork from '../../assets/Yandex.svg';
import Google from '../../assets/Google.svg';
import WhatsApp from '../../assets/whatsapp.png';
import TikTok from '../../assets/tiktok.svg';
import Microsoft from '../../assets/Microsoft_logo.svg';

// messages
import YandexWorkMessage from '../../lab/YandexWorkMessage';
import WhatsAppMessage from '../../lab/WhatsAppMessage';
import TikTokMessage from '../../lab/TikTokMessage';
import MicrosoftMessage from '../../lab/MicrosoftMessage';
import GoogleMessage from '../../lab/GoogleMessage';

// .eml links
import YandexWorkEML from '../../lab/eml/YandexWork.eml';
import WhatsAppEML from '../../lab/eml/WhatsApp.eml';
import TikTokEML from '../../lab/eml/TikTok.eml';
import MicrosoftEML from '../../lab/eml/Microsoft.eml';
import GoogleEML from '../../lab/eml/Google.eml';

//files links
import whatsAppTerms from '../../lab/files/TermsWhatsApp.pdf';
import Timeline from '../../lab/files/Timeline.pptx';
import doubleExtensionPdf from '../../lab/files/py.pdf.exe';
import justEXE from '../../lab/files/program.exe';
import passwordArchive from '../../lab/files/CoolScript.zip';


export default [
	{
		id: 1,
		subject: 'You have received a new response to a vacancy!',
		from: 'Yandex Work',
		sender: 'n0-reply@yandex.com',
		to: 'admin@hacktory.com',

		read: false,
		date: formatDate(new Date()),
		favorite: false,
		type: 'inbox',
		avatar: YandexWork,
		
		payload: (<YandexWorkMessage />),
		eml: YandexWorkEML,
		files: [{
			name: 'TestCase.exe',
			content: justEXE,
		}]
	},
	{
		id: 2,
		subject: 'Updated Terms of Use',
		from: 'Whats App',
		sender: 'no-reply@whatsapp.com',
		to: 'admin@hacktory.com',


		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: WhatsApp,

		payload: (<WhatsAppMessage />),
		eml: WhatsAppEML,
		files: [{
			name: 'Terms.pdf',
			content: whatsAppTerms,
		}]
	},
	{
		id: 3,
		subject: 'Important changes on TikTok (action required)',
		from: 'Tik Tok',
		sender: 'no_repiy@tik-tok.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: TikTok,

		payload: (<TikTokMessage />),
		eml: TikTokEML,
		files: [{
			name: 'Updated Terms of Use.zip',
			content: passwordArchive,
		}]
	},
	{
		id: 4,
		subject: 'Creating a corporate Microsoft Account',
		from: 'Microsoft',
		sender: 'micros0ft@gmail.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Microsoft,

		payload: (<MicrosoftMessage />),
		eml: MicrosoftEML,
		files: [{
			name: 'Terms.pdf.exe',
			content: doubleExtensionPdf,
		}]
	},
	{
		id: 5,
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
import React from 'react';
import Amazon from '../../assets/AmazonLogo.svg';
import MailRu from '../../assets/MailRu.svg';
import Ozon from '../../assets/ozon.png';
import Github from '../../assets/Github.svg';
import Apple from '../../assets/AppleLogo.svg';
import formatDate from '../../formatDate';

// messages
import GitHubMessage from '../../lab/GitHubMessage';
import MailRuMessage from '../../lab/MailRuMessage';
import AppleMessage from '../../lab/AppleMessage';
import OzonMessage from '../../lab/OzonMessage';
import AmazonMessage from '../../lab/AmazonMessage';

// .eml links
import GithubEML from '../../lab/eml/GitHub.eml';
import AppleEML from '../../lab/eml/Apple.eml';
import MailRuEML from '../../lab/eml/mailru.eml';
import OzonEML from '../../lab/eml/Ozon.eml';
import AmazonEML from '../../lab/eml/Amazon.eml';



export default [
	{
		id: 1,
		subject: 'Someone is trying to log into your GitHub account',
		from: 'GitHub',
		sender: 'github.suport6@rambler.ru',
		to: 'admin@hacktory.com',

		read: false,
		date: formatDate(new Date()),
		favorite: false,
		type: 'inbox',
		avatar: Github,
		
		payload: (<GitHubMessage />),
		eml: GithubEML
	},
	{
		id: 2,
		subject: 'Log in from a new device to your account',
		from: 'Mail.ru',
		sender: 'securiti@id.mail.ru',
		to: 'admin@hacktory.com',


		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: MailRu,

		payload: (<MailRuMessage />),
		eml: MailRuEML
	},
	{
		id: 3,
		subject: 'You need to confirm the email address for the Apple ID',
		from: 'Apple',
		sender: 'no-reply@apple.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Apple,

		payload: (<AppleMessage />),
		eml: AppleEML
	},
	{
		id: 4,
		subject: 'Approve password change',
		from: 'Ozon',
		sender: 'ma1ler@sender.ozon.ru',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Ozon,

		payload: (<OzonMessage />),
		eml: OzonEML
	},
	{
		id: 5,
		subject: 'Someone added your email address as a backup',
		from: 'Amazon',
		sender: 'no-reply@accounts.amazon.com',
		to: 'admin@hacktory.com',

		read: false,
		favorite: false,
		date: formatDate(new Date()),
		type: 'inbox',
		avatar: Amazon,

		payload: (<AmazonMessage />),
		eml: AmazonEML
	}
] as Message[];
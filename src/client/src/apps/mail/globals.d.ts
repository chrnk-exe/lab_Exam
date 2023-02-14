declare module '*.scss';
declare module '*.sass';
declare module '*.eml';


declare interface User {
	email: string | null | undefined;
	password: string | null | undefined;
}

declare interface Message {
	id: number;
	subject: string;
	from: string;
	sender: string;
	to: string | null;
	payload: unknown;
	date: string;
	type: BoxState;
	read: boolean;
	favorite: boolean;
	eml: string
    
	avatar?: string;
}

declare type BoxState =
	| 'inbox'
	| 'trash'
	| 'spam'
	| 'sent'
	| 'drafts'
	| 'favorite';

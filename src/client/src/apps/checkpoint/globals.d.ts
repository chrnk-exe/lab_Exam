declare module '*.scss';
declare module '*.sass';
declare module '*.json';
declare module '*.mp4';
declare module '*.mov';

declare interface Invite {
	id: number
	name: string
	time: string
	reason: string
}

declare interface Note {
	title: string
	body: string
}

declare type stageState = 'office' | 'cafe';

declare interface Answer {
	text: string;
	correct: boolean;
	isSkip?: boolean
	link?: string
}

declare interface Script {
	message: string;
	answers: Answer[];
}

declare interface ScriptObject {
	call: string;
	variants: string;
	scripts: Script[][];
}


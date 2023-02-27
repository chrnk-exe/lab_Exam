import byField from './utils/byField';

const invitations: Invite[] = [
	{
		id: 1,
		name: 'snow_cleaner',
		time: '10:00',
		reason: 'snow_cleaner_reason'
	},
	{
		id: 2,
		name: 'ad_adviser',
		time: '11:00',
		reason: 'ad_adviser_reason'
	},
	{
		id: 3,
		name: 'job_candidate_1',
		time: '13:30',
		reason: 'job_candidate_reason_1'
	},
	{
		id: 4,
		name: 'job_candidate_2',
		time: '15:40',
		reason: 'job_candidate_reason_2'
	},
];

export const sortedById = [...invitations].sort(byField('id'));
// export const sortedByLastCall = [...contacts].sort(byField('lastCall'));
export default invitations;
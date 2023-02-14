enum months {
	undefined,
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
}

export default (date: Date): string => {
	return [date.getDate(), months[date.getMonth() + 1], date.getFullYear()].join(' ');
};

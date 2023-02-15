import { useState, useEffect } from 'react';

export default (start = 3600, isPause= false): [string, (subTime: number) => void, boolean] => {
	const [time, setTime] = useState(start);
	const [pause, setPause] = useState(isPause);
	const [reverse, setReverse] = useState(false);

	useEffect(() => {
		setTime(start);
	}, [start]);

	useEffect(() => {
		setPause(isPause);
	}, [isPause]);

	console.log('USE_TIMER: PAUSE IS ', pause);

	useEffect(() => {
		const ID = setInterval(() => {
			console.log('USE_TIMER: PAUSE IN SET_INTERVAL IS', pause);
			if(!pause){
				if (!reverse) {
					setTime(prev => {
						if(prev === 1){
							setReverse(true);
						}
						return prev - 1;
					});
				} else {
					setTime(prev => prev + 1);
				}
			}
		}, 1000);
		return () => clearInterval(ID);
	}, [start, reverse, pause]);

	const subtractTime = (subTime: number) => {
		if (reverse) {
			setTime(time + subTime);
			return;
		}
		if (subTime > time) {
			const diff = subTime - time;
			setTime(diff);
			setReverse(true);
		} else {
			setTime(time - subTime);
		}
		return;
	};

	const getMinutes = (time: number) => {
		return Math.floor(time % 60).toString().length > 1
			? Math.floor(time % 60)
			: '0' + Math.floor(time % 60).toString();
	};

	const getTimerStr = (time: number) => {
		return reverse
			? ['-' + Math.floor(time / 60).toString(), getMinutes(time)].join(
				':',
			)
			: [Math.floor(time / 60).toString(), getMinutes(time)].join(':');
	};

	return [getTimerStr(time), subtractTime, reverse];
};

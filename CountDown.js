import React from 'react';
const CountDown = ({ reset, countDown, setCountDown }) => {
	let [interval, setTimeInterval] = React.useState(null);
	function startCountDown() {
		if (interval) {
			clearInterval(interval);
			countDown = 60;
		}
		setTimeInterval(
			setInterval(() => {
				if (countDown <= 0) {
					return setCountDown(countDown);
				}
				setCountDown(countDown--);
			}, 1000)
		);
	}
	React.useEffect(() => {
		startCountDown();
	}, [reset]);
	return <span>00:{countDown}</span>;
};

export default CountDown;

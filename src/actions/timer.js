// START_TIMER
export const startTimer = (secondsLeft) => ({
	type: 'START_TIMER',
	seconds_left: secondsLeft
});

// UPDATE_TIMER
export const updateTimer = () => ({
	type: 'UPDATE_TIMER'
});

// CLEAR_TIMER
export const clearTimer = () => ({
	type: 'CLEAR_TIMER'
});
const timerDefaultState = {};

const start = (action) => {
	var dateNow = new Date();

	return {
        seconds_left: action.seconds_left,
		time_stamp: dateNow.getTime()
	};
}

const update = (state) => {
	var dateNow = new Date();

	return {
        seconds_left: state.seconds_left - 1,
		time_stamp: dateNow.getTime()
	};
}

export default (state = timerDefaultState, action) => {
	switch (action.type) {
		case 'START_TIMER':
			return start(action);
		case 'UPDATE_TIMER':
			return update(state);
		case 'CLEAR_TIMER':
			return { ...timerDefaultState };
        case 'LOG_OUT_OF_API':
            return { ...timerDefaultState };
		default:
			return state;
	}
};
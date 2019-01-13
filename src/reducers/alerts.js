const alertNotify = (state, action) => {
	let queue = [...state];

	if (!queue || !Array.isArray(queue))
		queue = [];

	let newAlert = {
		id: getUniqueId(),
		message: action.message,
		severity: action.severity
	};

	queue.push(newAlert);

	return queue;
};

const alertDismiss = (state, action) => {
	const newQueue = state.filter((element) => element.id !== action.id);

	return newQueue;
};

const getUniqueId = () => {
	return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};

export default (state = [], action) => {
	switch (action.type) {
		case 'DISPLAY_ALERT':
			return alertNotify(state, action);
		case 'DISMISS_ALERT':
			return alertDismiss(state, action);
        case 'LOG_OUT_OF_API':
			return [];
		default:
			return state;
	}
};
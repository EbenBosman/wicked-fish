// DISPLAY_ALERT
export const displayAlert = (message, severity) => ({
	type: 'DISPLAY_ALERT',
	message: message,
	severity: severity
});

// DISMISS_ALERT
export const dismissAlert = (id) => ({
	type: 'DISMISS_ALERT',
	id: id
});
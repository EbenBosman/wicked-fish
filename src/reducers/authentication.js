const authDefaultState = {};

const logIn = (action) => {
	const jwt = action.auth.jwt;
	const userName = action.auth.user_name;
	const expiresIn = action.auth.expires_in;

	var dateNow = new Date();

	return {
		jwt: jwt,
		user_name: userName,
		expires_at: dateNow.getTime() + (expiresIn * 1000),
		time_stamp: dateNow.getTime()
	};
}

const logOut = () => {
	localStorage.clear();
	return authDefaultState;
}

export default (state = authDefaultState, action) => {
	switch (action.type) {
		case 'LOGGED_INTO_API':
			return logIn(action);
		case 'LOG_OUT_OF_API':
			return logOut();
		default:
			return state;
	}
};
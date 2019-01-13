// LOGGED_INTO_API
export const loggedIntoApi = (auth_token) => ({
	type: 'LOGGED_INTO_API',
	auth: auth_token
});

// LOGGED_OUT_OF_API
export const logOutOfApi = () => ({
	type: 'LOG_OUT_OF_API'
});
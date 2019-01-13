import axios from 'axios';

const headers = (mustCache, jwtOverride) => {
	const localStore = JSON.parse(localStorage.getItem('persist:root'));

	const jwt = (JSON.parse(localStore.auth)).jwt ? (JSON.parse(localStore.auth)).jwt : jwtOverride;

	if(localStore && localStore.auth)
		return {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Credentials': 'include',
			'Cache-Control': !mustCache ? 'no-cache' : '',
			'Authorization': `Bearer ${jwt}`
		};

	return {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Cache-Control': !mustCache ? 'no-cache' : '',
		'Credentials': 'include'
	}
};

//  Todo: get server from config file
//	jwtOverride is for the special case of getting the reference data at login. The JWT isn't available in store
//		yet by the time that the getReferenceData call is made. However, it is available in the login function,
//		thus it is being sent along directly from the login function all.
export default (mustCache = false, jwtOverride) => {
	return axios.create({
		baseURL: `https://localhost:44391/`,
		headers: headers(mustCache, jwtOverride)
	});
}
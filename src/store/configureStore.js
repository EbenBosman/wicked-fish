import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authenticationReducer from '../reducers/authentication';
import wizardReducer from '../reducers/wizard';
import alertsReducer from '../reducers/alerts';
import timerReducer from '../reducers/timer';

export default () => {
	const persistConfig = {
		key: 'root',
		storage,
	};

	let reducers = combineReducers({
		auth: authenticationReducer,
		wizard: wizardReducer,
		alerts: alertsReducer,
		timer: timerReducer
	});

	let store = createStore(
		persistReducer(persistConfig, reducers),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	let persistor = persistStore(store);

	return { store, persistor };
};

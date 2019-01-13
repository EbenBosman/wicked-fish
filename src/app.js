import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import Alerts from './components/controls/Alerts';

const { store, persistor } = configureStore();

const jsx = (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Alerts />
			<AppRouter />
		</PersistGate>
	</Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

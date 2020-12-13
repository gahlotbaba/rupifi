import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducer';
import rootSaga from './saga';

const bindMiddleware = (middleware) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension');
		return composeWithDevTools(applyMiddleware(...middleware));
	}
	return applyMiddleware(...middleware);
};

export const makeStore = () => {
	const sagaMiddleware = createSagaMiddleware();

	const isServer = typeof window === 'undefined';
	let store;
	if (isServer) {
		store = createStore(
			rootReducer,
			undefined,
			bindMiddleware([sagaMiddleware]),
		);
	} else {
		// we need it only on client side
		const { persistStore, persistReducer } = require('redux-persist');
		const storage = require('redux-persist/lib/storage').default;

		const persistConfig = {
			key: 'rupifi',
			whitelist: ['customers'],
			storage,
		};

		const persistedReducer = persistReducer(persistConfig, rootReducer);
		store = createStore(
			persistedReducer,
			undefined,
			bindMiddleware([sagaMiddleware]),
		);

		store.__persistor = persistStore(store);
	}
	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });

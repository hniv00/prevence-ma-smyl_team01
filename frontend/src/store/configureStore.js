import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import api from '../api';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage/session';

import rootReducer from './createRootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument({ api }))),
  );
  let persistor = persistStore(store);
  return { store, persistor };
};

import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from '../redux/contacts/contacts-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

// STORE

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: process.env.NODE_ENV === 'development' && middleware,
});

const persistor = persistStore(store);

export default { store, persistor };

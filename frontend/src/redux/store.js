import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// };

// const rootReducer = combineReducers({ auth: authReducer})

// const persistReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     reducer: persistReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// })

// export let persistor = persistStore(store)

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
})
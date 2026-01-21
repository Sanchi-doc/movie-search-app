import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authReduser";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }
export const store = configureStore({

    reducer: {
        [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer)
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
]})

export const persister = persistStore(store)
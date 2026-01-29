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
import { filmsApi } from "./films/filmOperations";

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  }
export const store = configureStore({

    reducer: {
        [authSlice.name]: persistReducer(authPersistConfig, authSlice.reducer),
        [filmsApi.reducerPath]: filmsApi.reducer
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
        filmsApi.middleware
]})

export const persister = persistStore(store)
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth'
import todoReducer from './todo'

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}


const reducer = combineReducers({
    auth: authReducer,
    todos: todoReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)

export default store
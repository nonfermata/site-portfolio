import { configureStore, combineReducers } from '@reduxjs/toolkit';
import langReducer from './langReducer';

const rootReducer = combineReducers({
    lang: langReducer
});

function createStore() {
    return configureStore({
        reducer: rootReducer,
        devTools: process.env.NODE_ENV !== 'production'
    });
}
const store = createStore();

export default store;
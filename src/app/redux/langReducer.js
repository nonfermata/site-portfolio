import { createSlice } from '@reduxjs/toolkit';

export const initialState = 'en';

const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        set(state, action) {
            return action.payload;
        }
    }
});

const { set } = langSlice.actions;
const langReducer = langSlice.reducer;

export const applyLang = (lang) => set(lang);

export const getLang = () => (state) => state.lang;

export default langReducer;

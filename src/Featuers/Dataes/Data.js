import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotrightnow: null,
    original: null,
    popular: null,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setDataes: (state, action) => {
            state.hotrightnow = action.payload.hotrightnow;
            state.original = action.payload.original;
            state.popular = action.payload.popular;
        },
    },
});

export const { setDataes } = dataSlice.actions;

export const selectHotRightNow = (state) => state.data.hotrightnow;
export const selectOriginal = (state) => state.data.original;
export const selectPopular = (state) => state.data.popular;

export default dataSlice.reducer;


import { configureStore, createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: "store",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        clearBasket: (state) => {
            state.items = [];
        }
    }
});

export const { addItem, clearBasket } = basketSlice.actions;

const store = configureStore({
    reducer: {
        basket: basketSlice.reducer
    }
});

export default store;
import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculator/calculatorSlice";

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice,
    }
})

export type RootState = ReturnType<typeof store.getState> // This is the type of the state
export type AppDispatch = typeof store.dispatch // This is the type of the dispatch function
import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "./calculator/calculatorSlice";
import themeSlice from "./theme/themeSlice";

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice,
        theme: themeSlice,
    }
})

export type RootState = ReturnType<typeof store.getState> // This is the type of the state
export type AppDispatch = typeof store.dispatch // This is the type of the dispatch function
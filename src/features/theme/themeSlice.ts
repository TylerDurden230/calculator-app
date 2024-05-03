import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTheme: 1
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.selectedTheme = action.payload;
        }
    }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
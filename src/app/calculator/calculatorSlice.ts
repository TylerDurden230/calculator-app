import {createSlice} from "@reduxjs/toolkit"

interface CalculatorState {
    value1: number;
    value2: number;
    result: number
}

const initialState: CalculatorState = {
    value1: 0,
    value2: 0,
    result: 0
};

const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {
        sum: (state) => {
            state.result = state.value1 + state.value2
        },
        subtract: (state) => {
            state.result = state.value1 - state.value2
        },
        multiply: (state) => {
            state.result = state.value1 * state.value2
        },
        divide: (state) => {
            state.result = state.value1 / state.value2
        }

    }
})

export default calculatorSlice.reducer
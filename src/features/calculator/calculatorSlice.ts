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
        setValue1: (state : CalculatorState, action) => {
            state.value1 = action.payload
        },
        setValue2: (state : CalculatorState, action) => {
            state.value2 = action.payload
        },
        sum: (state : CalculatorState) => {
            state.result = state.value1 + state.value2
        },
        subtract: (state : CalculatorState) => {
            state.result = state.value1 - state.value2
        },
        multiply: (state : CalculatorState) => {
            state.result = state.value1 * state.value2
        },
        divide: (state : CalculatorState) => {
            state.result = state.value1 / state.value2
        },
        reset: (state : CalculatorState) => {
            state.result = 0;
            state.value1 = 0;
            state.value2 = 0;
        }

    }
})

export const {sum, subtract, multiply, divide} = calculatorSlice.actions
export default calculatorSlice.reducer
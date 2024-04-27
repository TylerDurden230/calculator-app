import { createSlice } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux";

interface CalculatorState {
    display: string,
    value1: number |  null;
    value2: number | null;
    operator: string;
    result: number | null;
}

const initialState: CalculatorState = {
    display: "",
    value1: null,
    value2: null,
    operator: "",
    result: null
};



const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {

        setDisplay: (state: CalculatorState, action) => {
            state.display += action.payload
        },
        resetDisplay: (state: CalculatorState) => {
            state.display = ""
        },
        del: (state: CalculatorState) => {
            state.display = state.display.slice(0, -1)
        },
        equal: (state: CalculatorState, action) => {
            if (state.operator === "+") {
                state.result = state.value1! + state.value2!
            }
            else if (state.operator === "-") {
                state.result = state.value1! - state.value2!
            }
            else if (state.operator === "x") {
                state.result = state.value1! * state.value2!
            }
            else if (state.operator === "/") {
                state.result = state.value1! / state.value2!
            }
        },
        setValue1: (state: CalculatorState, action) => {
            typeof action.payload === "string" ? state.value1 = parseFloat(action.payload) :
            state.value1 = action.payload
        },
        setValue2: (state: CalculatorState, action) => {
            typeof action.payload === "string" ? state.value2 = parseFloat(action.payload) :
            state.value2 = action.payload
        },
        sum: (state: CalculatorState) => {
            state.result = state.value1! + state.value2!
        },
        subtract: (state: CalculatorState) => {
            state.result = state.value1 - state.value2
        },
        multiply: (state: CalculatorState) => {
            state.result = state.value1 * state.value2
        },
        divide: (state: CalculatorState) => {
            state.result = state.value1 / state.value2
        },
        reset: (state: CalculatorState) => {
            state.result = null;
            state.value1 = null;
            state.value2 = null;
            state.display = ""
        },
        operation: (state: CalculatorState, action) => {
            if (action.payload === "+") {
                state.operator = "+"
            }
            else if (action.payload === "-") {
                state.operator = "-"
            }
            else if (action.payload === "x") {
                state.operator = "x"
            }
            else if (action.payload === "/") {
                state.operator = "/"
            }
        },

    }
})

export const { sum, subtract, multiply, divide, reset, setDisplay, setValue1, setValue2, del, equal, operation, resetDisplay } = calculatorSlice.actions
export default calculatorSlice.reducer
import { createSlice } from "@reduxjs/toolkit"
import {OperationValue, Operator } from "../../types/types";

interface CalculatorState {
    display: string,
    value1: OperationValue;
    value2: OperationValue;
    operator: Operator | "" | null;
    result: number | null;
}

const initialState: CalculatorState = {
    display: "",
    value1: {
        value: "",
        isSet: false
    },
    value2: {
        value: "",
        isSet: false
    },
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
            state.display = state.display.slice(0, -1);
            if (!state.value1.isSet){
                state.value1.value = state.value1.value.slice(0, -1);
            }
            else if (state.value1.isSet && !state.value2.isSet){
                state.value2.value = state.value2.value.slice(0, -1);
            }
        },
        setValue1: (state: CalculatorState, action) => {
/*             typeof action.payload === "string" ? state.value1 = parseFloat(action.payload) :
            state.value1 = action.payload */
            state.value1.value += action.payload;
            state.display += action.payload;
        },
        setValue2: (state: CalculatorState, action) => {
            state.value2.value += action.payload;
            state.display += action.payload;
        },
        setOperator: (state: CalculatorState, action) => {
            console.log("SETOPERATOR", state.value1.value);
            
            if (state.value1.value != "" && !state.value1.isSet) {
                console.log("SONO ENTRATO NEL 1 IF")
                state.operator = action.payload;
                state.value1.isSet = true;
            }
            else if (state.value1.isSet && !state.value2.isSet && state.value2.value != ""){
                state.value2.isSet = true;
                console.log("SONO ENTRATO NEL 2 IF")
            }
            else{
                console.log("non devo fare nulla", state);
            }
        },
        reset: (state: CalculatorState) => {
            state.result = null;
            state.value1 = {
                value: "",
                isSet: false
            },
            state.value2 = {
                value: "",
                isSet: false
            },
            state.display = ""
        }

    }
})

export const {reset, setDisplay, setValue1, setValue2, del, resetDisplay, setOperator } = calculatorSlice.actions
export default calculatorSlice.reducer
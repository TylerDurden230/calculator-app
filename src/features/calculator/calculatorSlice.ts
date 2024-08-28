import { createSlice } from "@reduxjs/toolkit"
import {OperationValue, Operator } from "../../types/types";

interface CalculatorState {
    operationStatus: string,
    display: string,
    value1: OperationValue;
    value2: OperationValue;
    operator: Operator | "" | null;
    result: number | null;
    recap: string;
}



const initialState: CalculatorState = {
    operationStatus: "open",
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
    result: 0,
    recap: ""
};



const calculatorSlice = createSlice({
    name: "calculator",
    initialState,
    reducers: {

        setDisplay: (state: CalculatorState, action) => {
            state.display += action.payload
        },
        resetDisplay: (state: CalculatorState) => {
            state.display = ''
        },
        setOperationStatus: (state: CalculatorState, action) => {
            state.operationStatus = action.payload;
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
            state.value1.value += action.payload;
            state.display += action.payload;
        },
        setValue2: (state: CalculatorState, action) => {
            state.value2.value += action.payload;
            state.display += action.payload;
        },
        setOperator: (state: CalculatorState, action) => {
            if (state.operationStatus === "closed") {
                state.operationStatus = "open"
                state.value1 = {
                    value: state.display,
                    isSet: true
                };
                state.operator = action.payload;
                state.recap = state.value1.value + state.operator;
                state.display = ''

            }
            
            if (state.value1.value != "" && !state.value1.isSet) {
                state.operator = action.payload;
                state.value1.isSet = true;
                state.display = "";
                state.recap = state.value1.value + state.operator;
            }
            else if (state.value1.isSet && state.value2.value != ""){
                if (state.operator != ""){
                    switch(state.operator){
                        case "+":
                            state.value1.value = (parseFloat(state.value1.value) + parseFloat(state.value2.value)).toString();
                            break;
                        case "-":
                            state.value1.value = (parseFloat(state.value1.value) - parseFloat(state.value2.value)).toString();
                            break;
                        case "x":
                            state.value1.value = (parseFloat(state.value1.value) * parseFloat(state.value2.value)).toString();
                            break;
                        case "/":
                            state.value1.value = (parseFloat(state.value1.value) / parseFloat(state.value2.value)).toString();
                            break;
                    }
                    state.display = state.value1.value;
                    state.value2.value = "";
                }
                state.operator = action.payload;
                state.recap = state.value1.value + state.operator;
                state.display = ''
            }
        },
        equal : (state : CalculatorState) => {
            if (state.value1.value === "" || state.value2.value === ""){
                return;
            }
            switch(state.operator){
                case "+":
                    state.result = (parseFloat(state.value1.value) + parseFloat(state.value2.value));
                    state.display = state.result?.toString()
                    state.recap = '';
                    state.value1 = {
                        value: '',
                        isSet: false
                    };
                    state.value2 = {
                        value: '',
                        isSet: false
                    }
                    state.operationStatus = "closed"
                    break;
                case "-":
                    state.result = (parseFloat(state.value1.value) - parseFloat(state.value2.value));
                    state.display = state.result?.toString()
                    state.recap = '';
                    state.value1 = {
                        value: '',
                        isSet: false
                    };
                    state.value2 = {
                        value: '',
                        isSet: false
                    }
                    state.operationStatus = "closed"
                    break;
                case "x":
                    state.result = (parseFloat(state.value1.value) * parseFloat(state.value2.value));
                    state.display = state.result?.toString()
                    state.recap = '';
                    state.value1 = {
                        value: '',
                        isSet: false
                    };
                    state.value2 = {
                        value: '',
                        isSet: false
                    }
                    state.operationStatus = "closed"
                    break;
                case "/":
                    state.result = (parseFloat(state.value1.value) / parseFloat(state.value2.value));
                    state.display = state.result?.toString()
                    state.recap = '';
                    state.value1 = {
                        value: '',
                        isSet: false
                    };
                    state.value2 = {
                        value: '',
                        isSet: false
                    }
                    state.operationStatus = "closed"
                    break;
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
            state.display = "",
            state.recap = ""
        }

    }
})

export const {reset, setDisplay, resetDisplay, setValue1, setValue2, del, setOperator, equal, setOperationStatus } = calculatorSlice.actions
export default calculatorSlice.reducer
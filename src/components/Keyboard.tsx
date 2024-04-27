import { useMemo } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay, reset, del, operation, setValue1, setValue2, resetDisplay, equal, sum, subtract, multiply, divide } from "../features/calculator/calculatorSlice";

const Keyboard = () => {

  const dispatch = useDispatch();
  const calculatorState = useSelector((state: any) => state.calculator);

  const valutation = () => {
    if (calculatorState.value1 === null) {
      console.log("1ST IF -> value1: ", calculatorState.value1)
      dispatch(setValue1(calculatorState.display));
      dispatch(resetDisplay());
    }
    else if (calculatorState.value1 && calculatorState.value2 === null) {
      console.log("2ND IF -> value1: ", calculatorState.value1)
      dispatch(setValue2(calculatorState.display));
    }
    else {
      console.log("3rd IF -> value1 e value 2: ", calculatorState.value1, calculatorState.value2)
      dispatch(setValue1(calculatorState.result));
      dispatch(setValue2(null));
    }
  }

  const handleEqual = (operator : string) => {
    if (calculatorState.value1 !== null && calculatorState.value2 !== null) {
      if (operator === "+") {
        dispatch(sum());
        dispatch(setDisplay(calculatorState.result));
      }
      else if (operator === "-") {
        dispatch(subtract());
      }
      else if (operator === "x") {
        dispatch(multiply());
      }
      else if (operator === "/") {
        dispatch(divide());
    }
  }
}

  const displayButtons = useMemo(() => {
    const buttons = [
      7,
      8,
      9,
      "del",
      4,
      5,
      6,
      "+",
      1,
      2,
      3,
      "-",
      ".",
      0,
      "/",
      "x",
      "reset",
      "=",
    ];

    return buttons.map((button, index) => {
      if (button === "del")
        return <Button value={button} key={index} func1={() => dispatch(del())} />
      if (button === "=")
        return <Button value={button} key={index} className="half-width-button" func1={() => handleEqual(calculatorState.operator)} />
      if (button === "reset")
        return <Button value={button} key={index} className="half-width-button" func1={() => dispatch(reset())} />
      if (button === "+" || button === "-" || button === "x" || button === "/")
        return <Button value={button} key={index} func1={() => dispatch(operation(button))} func2={valutation} />;
      else
        return <Button value={button} key={index} func1={() => dispatch(setDisplay(button))} />;
    });
  }, [calculatorState, dispatch]);

  return <div className="debug-border p1 keyboard">{displayButtons}</div>;
};

export default Keyboard;

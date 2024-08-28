import { useMemo } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { reset, del, setValue1, setValue2, setOperator, equal, resetDisplay, setOperationStatus } from "../features/calculator/calculatorSlice";
import { ButtonType } from "../types/types";

const Keyboard = () => {

  const dispatch = useDispatch();
  const calculatorState = useSelector((state: any) => state.calculator);

  const handleDigit = (buttonValue : string) => {
    if (!calculatorState.value1.isSet){
      if (calculatorState.operationStatus === "closed"){
        dispatch(resetDisplay())
        dispatch(setOperationStatus("open"))
      }
      dispatch(setValue1(buttonValue))
    }
    else if (calculatorState.value1.isSet && !calculatorState.value2.isSet)
      dispatch(setValue2(buttonValue))
  }

  const handleOperator = (buttonValue : string) => {
    dispatch(setOperator(buttonValue))
  }

  const displayButtons = useMemo(() => {
    const buttons = [
      {
        value: "7",
        type: ButtonType.DIGIT
      },
      {
        value: "8",
        type: ButtonType.DIGIT
      },
      {
        value: "9",
        type: ButtonType.DIGIT
      },
      {
        value: "DEL",
        type: ButtonType.DEL
      },
      {
        value: "4",
        type: ButtonType.DIGIT
      },
      {
        value: "5",
        type: ButtonType.DIGIT
      },
      {
        value: "6",
        type: ButtonType.DIGIT
      },
      {
        value: "+",
        type: ButtonType.OPERATOR
      },
      {
        value: "1",
        type: ButtonType.DIGIT
      },
      {
        value: "2",
        type: ButtonType.DIGIT
      },
      {
        value: "3",
        type: ButtonType.DIGIT
      },
      {
        value: "-",

        type: ButtonType.OPERATOR
      },
      {
        value: ".",
        type: ButtonType.DIGIT
      },
      {
        value: "0",
        type: ButtonType.DIGIT
      },
      {
        value: "/",
        type: ButtonType.OPERATOR
      },
      {
        value: "x",
        type: ButtonType.OPERATOR
      },
      {
        value: "RESET",
        type: ButtonType.RESET
      },
      {
        value: "=",
        type: ButtonType.OPERATOR
      }
    ];

    return buttons.map((button) => {
      if (button.type === ButtonType.DEL)
        return <Button value={button.value} key={button.value} func1={() => dispatch(del())} buttonStyle="delres-button" />
      if (button.type === ButtonType.RESET)
        return <Button value={button.value} key={button.value} divStyle="half-width-button" buttonStyle="delres-button" func1={() => dispatch(reset())} />
      if (button.type === ButtonType.OPERATOR){
        if (button.value === "=")
          return <Button divStyle={"half-width-button"} buttonStyle="equal-button" value={button.value} key={button.value} func1={() => dispatch(equal())} />
        else
          return <Button buttonStyle={"operator-button"} value={button.value} key={button.value} func1={() => handleOperator(button.value)} func2={() => console.log(" operator func2")} />;
      }
      return <Button buttonStyle={"number-button"} value={button.value} key={button.value} func1={() => handleDigit(button.value)} />;
    });
  }, [calculatorState, dispatch]);

  return <div className="p1 keyboard">{displayButtons}</div>;
};

export default Keyboard;

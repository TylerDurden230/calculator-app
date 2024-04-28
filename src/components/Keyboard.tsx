import { useMemo } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay, reset, del, setValue1, setValue2, resetDisplay } from "../features/calculator/calculatorSlice";
import { ButtonType } from "../types/types";

const Keyboard = () => {

  const dispatch = useDispatch();
  const calculatorState = useSelector((state: any) => state.calculator);

  const handleDigit = (buttonValue : string) => {
    console.log("handledigit")
    if (!calculatorState.value1.isSet){
      console.log("handledigit 1st IF: value1-> ", calculatorState.value1)
      dispatch(setValue1(buttonValue))
    }
    else if (calculatorState.value1.isSet && !calculatorState.value2.isSet)
      dispatch(setValue2(buttonValue))

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
        value: "del",
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
        value: "=",
        type: ButtonType.OPERATOR
      },
      {
        value: "reset",
        type: ButtonType.RESET
      }

    ];

    return buttons.map((button) => {
      if (button.type === ButtonType.DEL)
        return <Button value={button.value} key={button.value} func1={() => dispatch(del())} />
      if (button.type === ButtonType.RESET)
        return <Button value={button.value} key={button.value} className="half-width-button" func1={() => dispatch(reset())} />
      if (button.type === ButtonType.OPERATOR){
        if (button.value === "=")
          return <Button value={button.value} key={button.value} className="half-width-button" func1={() => console.log("EQUAL")} />
        else
          return <Button value={button.value} key={button.value} func1={() => console.log("operator func1")} func2={() => console.log(" operator func2")} />;
      }
      return <Button value={button.value} key={button.value} func1={() => handleDigit(button.value)} />;
    });
  }, [calculatorState, dispatch]);

  return <div className="debug-border p1 keyboard">{displayButtons}</div>;
};

export default Keyboard;

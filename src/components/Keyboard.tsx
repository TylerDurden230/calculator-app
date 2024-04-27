import { useMemo } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { setDisplay, reset, del, operation } from "../features/calculator/calculatorSlice";

const Keyboard = () => {

  const dispatch = useDispatch();

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
        return <Button value={button} key={index} func={() => dispatch(del())} />
      if (button === "=")
        return <Button value={button} key={index} className="half-width-button" func={() => console.log(button)} />
      if (button === "reset")
        return <Button value={button} key={index} className="half-width-button" func={() => dispatch(reset())} />
      if (button === "+" || button === "-" || button === "x" || button === "/")
        return <Button value={button} key={index} func={() => dispatch(operation(button))} />;
      else
        return <Button value={button} key={index} func={() => dispatch(setDisplay(button))} />;
    });
  }, []);

  return <div className="debug-border p1 keyboard">{displayButtons}</div>;
};

export default Keyboard;

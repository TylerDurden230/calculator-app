import { useMemo } from "react";
import Button from "./Button";

const Keyboard = () => {
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
        if(button === "=" || button === "reset")
            return <Button value={button} key={index} className="half-width-button" func={()=> console.log(button)} />
        else
            return <Button value={button} key={index} func={()=> console.log(button)} />;
    });
  }, []);

  return <div className="debug-border p1 keyboard">{displayButtons}</div>;
};

export default Keyboard;

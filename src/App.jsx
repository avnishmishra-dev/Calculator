import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const buttonNames = [
    "C",
    "%",
    "⌫",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "=",
    "RESET",
  ];

  const [displayVal, setDisplayVal] = useState("");

  const operators = ["+", "-", "*", "/", "%"];
  const specialChar = [".", "="];

  const handleButtonClick = (buttonText) => {
    if (buttonText === "C" || buttonText === "RESET") {
      setDisplayVal("");
    } else if (buttonText === "⌫") {
      setDisplayVal(displayVal.slice(0, -1));
    } else if (buttonText === "=") {
      try {
        const result = evaluate(displayVal);
        setDisplayVal(result.toString());
      } catch (error) {
        setDisplayVal(`Error! ${error.message}`);
      }
    } else {
      const lastChar = displayVal.slice(-1);
      if (operators.includes(buttonText) && operators.includes(lastChar)) {
        setDisplayVal(displayVal.slice(0, -1) + buttonText);
        return;
      }
      else if (specialChar.includes(buttonText) && specialChar.includes(lastChar)) {
        setDisplayVal(displayVal.slice(0, -1) + buttonText);
        return;
      }
      else if (
        (displayVal === "" && operators.includes(buttonText)) ||
        (displayVal === "" && specialChar.includes(buttonText))
      ) {
        return;
      }
      else if (buttonText === "."){
        const lastOperatorIndex = Math.max(
          displayVal.lastIndexOf("+"),
          displayVal.lastIndexOf("-"),
          displayVal.lastIndexOf("*"),
          displayVal.lastIndexOf("/"),
          displayVal.lastIndexOf("%"),
        )

        const currentNumber = displayVal.slice(lastOperatorIndex + 1);

        if(!currentNumber.includes(".")){
          setDisplayVal(displayVal + ".");
        }
        return;
      }

      let newTextDisplay = displayVal + buttonText;
      setDisplayVal(newTextDisplay);
    }
  };
  return (
    <>
      <div id="calculator">
        <Display displayVal={displayVal} />
        <Buttons
          elements={buttonNames}
          handleButtonClick={handleButtonClick}
        ></Buttons>
      </div>
    </>
  );
}

export default App;

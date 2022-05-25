import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const keyBoardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keyBoardRow2= ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keyBoardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const {
    lettersToDisable,
    currAttempt,
    gameOver,
    onSelect,
    onEnter,
    onDelete
  } = useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameOver.gameOver) return;
      if (event.key === "Enter") {
        onEnter();
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keyBoardRow1.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
        keyBoardRow2.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
        keyBoardRow3.forEach((key) => {
          if (event.key.toLowerCase() === key.toLowerCase()) {
            onSelect(key);
          }
        });
      }
    },
    [currAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  console.log(lettersToDisable);
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keyBoardRow1.map((key) => {
          return <Key keyVal={key} disabled={lettersToDisable.includes(key)} />;
        })}
      </div>
      <div className="line2">
        {keyBoardRow2.map((key) => {
          return <Key keyVal={key} disabled={lettersToDisable.includes(key)} />;
        })}
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey />
        {keyBoardRow3.map((key) => {
          return <Key keyVal={key} disabled={lettersToDisable.includes(key)} />;
        })}
        <Key keyVal={"DELETE"} bigKey />
      </div>
    </div>
  );
}

export default Keyboard;

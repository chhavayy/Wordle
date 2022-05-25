import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter(props) {
  const { matrix, setLettersToDisable, currAttempt, correctWord } =
    useContext(AppContext);
  const letter = matrix[props.currRowPos][props.currColPos];
  const correct = correctWord.toUpperCase()[props.currColPos] === letter;
  const maybeCorrect =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);
  const letterState =
    currAttempt.attempt > props.currRowPos &&
    (correct ? "correct" : maybeCorrect ? "maybeCorrect" : "wrong");

  useEffect(() => {
    if (letter !== "" && !correct && !maybeCorrect) {
      console.log(letter);
      setLettersToDisable((prev) => [...prev, letter]);
    }
  }, [currAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;

import "./App.css";
import Matrix from "./components/Matrix";
import Keyboard from "./components/Keyboard";
import { InitialMatrix, generateWordSet } from "./Words";
import React, { useState, createContext, useEffect } from "react";
import GameOver from "./components/GameOver";

export const AppContext = createContext();

function App() {
  const [matrix, setMatrix] = useState(InitialMatrix);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letter: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState("");
  const [lettersToDisable, setLettersToDisable] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onEnter = () => {
    if (currAttempt.letter !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += matrix[currAttempt.attempt][i];
    }
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === correctWord) {
      
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }
    console.log(currAttempt);
    if (currAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
      return;
    }
  };

  const onDelete = () => {
    if (currAttempt.letter === 0) return;
    const newBoard = [...matrix];
    newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
    setMatrix(newBoard);
    setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
  };

  const onSelect = (key) => {
    if (currAttempt.letter > 4) return;
    const newBoard = [...matrix];
    newBoard[currAttempt.attempt][currAttempt.letter] = key;
    setMatrix(newBoard);
    setCurrAttempt({
      attempt: currAttempt.attempt,
      letter: currAttempt.letter + 1,
    });
  };

  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          matrix,
          setMatrix,
          currAttempt,
          setCurrAttempt,
          correctWord,
          onSelect,
          onDelete,
          onEnter,
          lettersToDisable,
          setLettersToDisable,
          gameOver,
        }}
      >
        <div className="game">
          <Matrix />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

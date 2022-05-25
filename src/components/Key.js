import React, { useContext } from "react";
import { AppContext } from "../App";

function Key(props) {
  const { gameOver, onSelect, onDelete, onEnter } =
    useContext(AppContext);

  const handleSelect = () => {
    if (gameOver.gameOver) return;
    if (props.keyVal === "ENTER") {
      onEnter();
    } else if (props.keyVal === "DELETE") {
      onDelete();
    } else {
      onSelect(props.keyVal);
    }
  };
  return (
    <div
      className="key"
      id={props.bigKey ? "big" : props.disabled && "disabled"}
      onClick={handleSelect}
    >
      {props.keyVal}
    </div>
  );
}

export default Key;

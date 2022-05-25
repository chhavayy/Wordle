import React from "react";
import Letter from "./Letter";

function Matrix() {
  return (
    <div className="matrix">
      {" "}
      <div className="row">
        <Letter currColPos={0} currRowPos={0} />
        <Letter currColPos={1} currRowPos={0} />
        <Letter currColPos={2} currRowPos={0} />
        <Letter currColPos={3} currRowPos={0} />
        <Letter currColPos={4} currRowPos={0} />
      </div>
      <div className="row">
        <Letter currColPos={0} currRowPos={1} />
        <Letter currColPos={1} currRowPos={1} />
        <Letter currColPos={2} currRowPos={1} />
        <Letter currColPos={3} currRowPos={1} />
        <Letter currColPos={4} currRowPos={1} />
      </div>
      <div className="row">
        <Letter currColPos={0} currRowPos={2} />
        <Letter currColPos={1} currRowPos={2} />
        <Letter currColPos={2} currRowPos={2} />
        <Letter currColPos={3} currRowPos={2} />
        <Letter currColPos={4} currRowPos={2} />
      </div>
      <div className="row">
        <Letter currColPos={0} currRowPos={3} />
        <Letter currColPos={1} currRowPos={3} />
        <Letter currColPos={2} currRowPos={3} />
        <Letter currColPos={3} currRowPos={3} />
        <Letter currColPos={4} currRowPos={3} />
      </div>
      <div className="row">
        <Letter currColPos={0} currRowPos={4} />
        <Letter currColPos={1} currRowPos={4} />
        <Letter currColPos={2} currRowPos={4} />
        <Letter currColPos={3} currRowPos={4} />
        <Letter currColPos={4} currRowPos={4} />
      </div>
      <div className="row">
        <Letter currColPos={0} currRowPos={5} />
        <Letter currColPos={1} currRowPos={5} />
        <Letter currColPos={2} currRowPos={5} />
        <Letter currColPos={3} currRowPos={5} />
        <Letter currColPos={4} currRowPos={5} />
      </div>
    </div>
  );
}

export default Matrix;

import React from "react";
import Square from "./Square.js";

export default function Board() {
  return (
    <React.Fragment>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>

      <div className="board-row">
          <Square />
          <Square />
          <Square />
      </div>

      <div className="board-row">
          <Square />
          <Square />
          <Square />
      </div>
    </React.Fragment>
  );
} 

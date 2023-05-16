import React, { useState } from "react";

export default function Square() {

  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <React.Fragment>
      <button 
        className="square" 
        onClick={handleClick}
      >
        {value}
      </button>
    </React.Fragment>
  );
} 

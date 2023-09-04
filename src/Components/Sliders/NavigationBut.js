import React from "react";

const NavigationBut = ({ text, click, value, name }) => {
  return (
    <button onClick={click} value={value}>
      {text}
    </button>
  );
};

export default NavigationBut;

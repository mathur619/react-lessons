import React from "react";

const Button2 = () => {
  function handleClick(name) {
    console.log("button clicked again", name);
  }

  function handleClick2() {
    console.log("button2 clicked again");
  }

  return (
    <div>
      <button onClick={() => handleClick("prakhar")}>Click me</button>
      <button onClick={handleClick2}>Click me 2</button>
    </div>
  );
};

export default Button2;

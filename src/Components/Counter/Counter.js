import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  /*
    1. useState is just a function
    2. start with "use"
    3. function -> parameter, return 
    4. useState : parameter -> single, initialState
                  value, function

                  return -> array
                  array contains 2 elements
                  first element is the state 
                  second element is a function that is used to update the state
                  we generally use array destructuring

    5. whenever state is updated component re-render
    6. always update state using the update function
    7. update function -> parameter: either value or a function
  */

  return (
    <div>
      {count}
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Counter;

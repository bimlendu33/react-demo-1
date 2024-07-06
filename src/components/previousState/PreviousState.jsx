import { useState } from "react";

const PreviousState = () => {
  const [counter, setCounter] = useState(1);

  const updateCounter = () => {
    setCounter((prevState) => prevState + 1);
    setCounter((prevState) => prevState + 2);
    setCounter((prevState) => prevState + 3);
    console.log("counter ", counter);
  };

  return (
    <>
      <h3>Counter: {counter}</h3>
      <button className="btn btn-sm btn-success" onClick={updateCounter}>
        update counter
      </button>
    </>
  );
};

export default PreviousState;

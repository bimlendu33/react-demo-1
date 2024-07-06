import { useState } from "react";

const ReactState = () => {
  const [counter, setCounter] = useState("Hellooo");

  const changeObject = ($event) => {
    setCounter($event.target.value);
    console.log("counter ", counter);
  };

  return (
    <>
      <h3>State Component</h3>
      <div>Object: {counter}</div>
      <div>&nbsp;</div>

      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={counter}
        onChange={(e) => changeObject(e)}
      />
      {/* <button
        type="button"
        className="btn btn-secondary"
        onClick={changeObject}>
        Secondary
      </button> */}
    </>
  );
};

export default ReactState;

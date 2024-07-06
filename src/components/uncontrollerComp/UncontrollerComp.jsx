import { useRef } from "react";

const UncontrollerComp = () => {
  const inputRef = useRef(null);

  const updateValue = () => {
    inputRef.current.value = "Kya hai ji!!!!!!!!";
  };

  return (
    <>
      <div>Data {JSON.stringify(inputRef?.current?.value)}</div>
      <input className="form-control" ref={inputRef} defaultValue={"Hello"} />
      <button className="btn btn-primary" onClick={updateValue}>
        Change Value
      </button>
    </>
  );
};

export default UncontrollerComp;

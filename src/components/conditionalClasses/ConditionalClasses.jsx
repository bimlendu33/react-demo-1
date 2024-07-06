import { useState } from "react";
import "./ConditionalClasses.css";

const ConditionClasses = () => {
  const [mesgtype, setMesgType] = useState("msg-success");

  const changeStatus = () => {
    mesgtype === "msg-success"
      ? setMesgType("msg-error")
      : setMesgType("msg-success");
  };

  return (
    <>
      <div className={mesgtype === "msg-success" ? "msg-success" : "msg-error"}>
        Hello, I am {mesgtype === "msg-success" ? "sucess" : "error"} type of
        message
      </div>
      <button type="button" className="btn btn-primary" onClick={changeStatus}>
        Primary
      </button>
    </>
  );
};

export default ConditionClasses;

import { useState } from "react";
import ChildComp from "../childComp/ChildComp";

const ParentComp = () => {
  const [listOb, setListOb] = useState([1, 2, 3, 4, 5, 6]);
  console.log("parent rendered");

  return (
    <>
      <h3>Parent Component</h3>
      <div>Parent Data: {JSON.stringify(listOb)}</div>
      <ChildComp listEl={listOb} setParentList={setListOb} />
    </>
  );
};

export default ParentComp;

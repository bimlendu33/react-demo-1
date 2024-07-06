const ChildComp = ({ listEl, setParentList }) => {
  console.log("child rendered");
  return (
    <>
      <h3>Child Component</h3>
      <div>Current List: {JSON.stringify(listEl)}</div>
      <br />
      <button
        className="btn btn-sm btn-danger"
        onClick={() => setParentList(["New item"])}>
        update parent
      </button>
    </>
  );
};

export default ChildComp;

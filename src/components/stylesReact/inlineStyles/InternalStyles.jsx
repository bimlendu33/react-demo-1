const InternalStyles = () => {
  const internalStylesProp = {
    backgroundColor: "orange",
    color: "white",
    fontSize: "28px",
    fontWeight: "500",
  };
  return (
    <>
      <div className="title">Hello I am interal style component title</div>
      <div style={internalStylesProp}>Hello I am inline style component</div>
    </>
  );
};

export default InternalStyles;

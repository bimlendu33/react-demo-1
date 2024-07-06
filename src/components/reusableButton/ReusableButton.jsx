const ReusableButton = ({ afterClick, buttonClass, label }) => {
  return (
    <>
      <button className={`btn btn-sm ${buttonClass}`} onClick={afterClick}>
        {label}
      </button>
    </>
  );
};

export default ReusableButton;

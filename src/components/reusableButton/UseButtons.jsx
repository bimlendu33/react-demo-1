import ReusableButton from "./ReusableButton";

const UseButtons = () => {
  const buttonClicked = () => {
    console.log("button Clicked");
  };

  return (
    <>
      <ReusableButton
        afterClick={buttonClicked}
        buttonClass={"btn-primary"}
        label={"Primary"}
      />
      <ReusableButton
        afterClick={buttonClicked}
        buttonClass={"btn-secondary"}
        label={"Secondary"}
      />
      <ReusableButton
        afterClick={buttonClicked}
        buttonClass={"btn-success"}
        label={"Success"}
      />
    </>
  );
};

export default UseButtons;

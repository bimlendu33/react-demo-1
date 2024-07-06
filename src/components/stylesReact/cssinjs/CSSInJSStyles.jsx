import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: 12px;
  color: red;
  font-family: "Times New Roman", Times, serif;
`;

const SuccessMessage = styled.div`
  font-size: 12px;
  color: green;
  font-family: "Times New Roman", Times, serif;
`;

const CSSInJS = () => {
  return (
    <>
      <ErrorMessage>Hello I am CSS-IN-JS Error message</ErrorMessage>
      <SuccessMessage>Hello I am CSS-IN-JS Success message</SuccessMessage>
    </>
  );
};

export default CSSInJS;

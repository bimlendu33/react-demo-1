import CSSInJS from "./cssinjs/CSSInJSStyles";
import ExternalStyles from "./externalStyles/ExternalStyles";
import InternalStyles from "./inlineStyles/InternalStyles";
import StyleModules from "./styleModules/StyleModules";

const StylesInReact = () => {
  return (
    <>
      <InternalStyles />
      <ExternalStyles />
      <StyleModules />
      <CSSInJS />
    </>
  );
};

export default StylesInReact;

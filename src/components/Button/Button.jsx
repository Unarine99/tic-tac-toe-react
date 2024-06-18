import React from "react";
import { ButttonWrapper } from "./Button.styled";


function Button(props) {
    
  return <ButttonWrapper {...props}>{props.children}</ButttonWrapper>;
}

export default Button;

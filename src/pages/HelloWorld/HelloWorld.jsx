import React from "react";
import styled from "styled-components";
import Typography from "../../components/CoreUI/Typography/Typography";
import { Box } from "@material-ui/core";
import code_4 from "../../assets/images/code_4.png";

const HelloWorldStyled = styled.div`
  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

export default function HelloWorld() {
  return (
    <HelloWorldStyled>
      <Box fontWeight={700} fontSize={60}>
        Ողջույն աշխարհ
      </Box>

      <Typography fontSize={18} fontWeight={300} color="#6d6d6d">
        React-ի ամենափոքր օրինակն այսպիսի տեսք ունի.
      </Typography>

      <img src={code_4} alt="code-example" className="code-screen" />

      <Typography>
        Այն էջի վրա կպատկերի մի վերնագիր, որն ասում է <b>«Ողջույն, աշխարհ»</b>։
      </Typography>
    </HelloWorldStyled>
  );
}

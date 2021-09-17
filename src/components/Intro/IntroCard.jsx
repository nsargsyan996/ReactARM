import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";

const TitleStyled = styled.h4`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 26px;
`;

const ContentStyled = styled.h4`
  color: black;
  font-size: 17px;
  line-height: 1.7;
  font-weight: normal;
`;

function IntroCard({ title, content }) {
  return (
    <Box width="100%" maxWidth="32%">
      <TitleStyled>{title}</TitleStyled>
      <ContentStyled>{content}</ContentStyled>
    </Box>
  );
}

export default IntroCard;

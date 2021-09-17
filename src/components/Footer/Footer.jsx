import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import facebookLogo from "../../assets/images/facebook.png";

const FooterStyled = styled.footer`
  height: 50px;
  width: 100%;
  background-color: #20232a;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 45px;
  padding: 0 30px;
  color: whitesmoke;
`;

function Footer(props) {
  return (
    <FooterStyled>
      <Box component="img" src={facebookLogo} alt="fb-logo" height={40} />
      Copyright © 2021 Facebook Inc.
    </FooterStyled>
  );
}

export default Footer;

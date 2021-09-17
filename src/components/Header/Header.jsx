import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import reactLogo from "../../assets/images/logo.svg";

const HeaderStyled = styled.header`
  height: 45px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #20232a;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;

  ul {
    margin: 0;
    padding: 0;
    height: 100%;

    a {
      text-decoration: none;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    li {
      list-style: none;
      color: white;
      cursor: pointer;
      margin-left: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: rgb(97, 218, 251);
        border-bottom: 2px solid rgb(97, 218, 251);
      }
    }
  }
`;

const TitleStyled = styled.h5`
  color: whitesmoke;
  font-size: 28px;
  text-transform: uppercase;
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    color: rgb(97, 218, 251);
  }
`;

const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  height: 100%;
`;

export default function Header() {
  return (
    <HeaderStyled>
      <LinkStyled href="/">
        <Box component="img" width={32} src={reactLogo} alt="logo" />
        <TitleStyled>ReactJS</TitleStyled>
      </LinkStyled>

      <Box component="ul" display="flex" alignItems="center">
        <a
          href="https://dev.to/t/react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box component="li">Community</Box>
        </a>
        <a
          href="https://discord.com/invite/reactiflux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box component="li">Discord </Box>
        </a>
        <a
          href="https://www.reddit.com/r/reactjs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box component="li">Reddit</Box>
        </a>
        <a
          href="https://github.com/enaqx/awesome-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box component="li">Collection</Box>
        </a>
        <a
          href="https://github.com/facebook/react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box component="li">Github</Box>
        </a>
      </Box>
    </HeaderStyled>
  );
}

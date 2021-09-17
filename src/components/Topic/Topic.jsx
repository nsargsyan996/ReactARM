import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import { useParams } from "react-router";
import HelloWorld from "../../pages/HelloWorld/HelloWorld";
import IntroducingJsx from "../../pages/IntroducingJsx/IntroducingJsx";
import RenderingElements from "../../pages/RenderingElements/RenderingElements";
import Components from "../../pages/Components/Components";
import StateLifecycle from "../../pages/StateLifecycle/StateLifecycle";
import HandlingEvents from "../../pages/HandlingEvents/HandlingEvents";
import ConditionalRendering from "../../pages/ConditionalRendering/ConditionalRendering";
import ListsAndKeys from "../../pages/ListsAndKeys/ListsAndKeys";
import Forms from "../../pages/Forms/Forms";
import LiftingState from "../../pages/LiftingState/LiftingState";

const TopicStyled = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  background-color: white;
  overflow: auto;

  b {
    background-color: rgb(255, 229, 140);
  }

  ul {
    li {
      list-style: disc;
      padding: 6px;

      &:hover {
        color: rgb(97, 218, 251);
        cursor: pointer;
      }
    }

    .active {
      color: rgb(97, 218, 251);
      font-weight: bold;
    }
  }

  .code-screen {
    width: 100%;
    max-width: 900px;
    margin-top: 10px;
    margin-left: 20px;
  }
`;

function Topic() {
  const { url } = useParams();

  const pageRenderer = () => {
    switch (url) {
      case "hello-world":
        return <HelloWorld />;
      case "introducing-jsx":
        return <IntroducingJsx />;
      case "rendering-elements":
        return <RenderingElements />;
      case "components-and-props":
        return <Components />;
      case "state-and-lifecycle":
        return <StateLifecycle />;
      case "handling-events":
        return <HandlingEvents />;
      case "conditional-rendering":
        return <ConditionalRendering />;
      case "lists-and-keys":
        return <ListsAndKeys />;
      case "forms":
        return <Forms />;
      case "lifting-state-up":
        return <LiftingState />;
      default:
        return <div />;
    }
  };
  return (
    <Box
      component={TopicStyled}
      display="flex"
      alignItems="center"
      width={1}
      height="100%"
    >
      <Box
        width="25%"
        height={1}
        bgcolor="rgb(79 81 87)"
        borderRight="1px solid #c7c7c7"
      >
        <NavigationMenu />
      </Box>

      <Box
        width="75%"
        height={1}
        p={5}
        pr={10}
        bgcolor="#f7f7f7"
        overflow="auto"
      >
        <Box width={1} height={1}>
          {pageRenderer}
        </Box>
      </Box>
    </Box>
  );
}

export default Topic;

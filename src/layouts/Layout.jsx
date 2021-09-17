import React, { Suspense } from "react";
import styled from "styled-components";
import reactBg from "../assets/images/react-bh.jpg";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router";
import { APP_ROUTES } from "../AppRoutes";

const LayoutStyled = styled.div`
  background-image: url(${reactBg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  box-sizing: border-box;
  padding: 45px 0;
  position: relative;

  a {
    transition: color 0.4s ease-out;
  }
`;

function Layout() {
  return (
    <LayoutStyled>
      <Suspense fallback={null}>
        <Router>
          <Switch>
            {APP_ROUTES.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact}>
                <route.component />
              </Route>
            ))}
          </Switch>
        </Router>
      </Suspense>
    </LayoutStyled>
  );
}

export default Layout;

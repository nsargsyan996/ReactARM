import React from "react";
import { Box } from "@material-ui/core";
import { learningList } from "../learningList";
import { useHistory, useParams } from "react-router";

function NavigationMenu() {
  const { url: uri } = useParams();
  const history = useHistory();

  return (
    <Box>
      <ul>
        {learningList.map(({ title, url }) => {
          return (
            <Box
              component="li"
              color="white"
              key={title}
              className={uri === url ? "active" : ""}
              onClick={() => history.push(`/docs/${url}`)}
            >
              {title}
            </Box>
          );
        })}
      </ul>
    </Box>
  );
}

export default NavigationMenu;

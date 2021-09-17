import Intro from "./components/Intro/Intro";
import Topic from "./components/Topic/Topic";
import Learn from "./components/Learn/Learn";

const APP_ROUTES = [
  {
    path: "/",
    component: Intro,
    exact: true,
  },
  {
    path: "/docs/:url",
    component: Topic,
    exact: true,
  },
  {
    path: "/learn",
    component: Learn,
    exact: true,
  },
];

export { APP_ROUTES };

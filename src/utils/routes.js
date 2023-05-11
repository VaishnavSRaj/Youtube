import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainContainer from "../Components/MainContainer";
import Body from "../Components/Body";
import WatchPage from "../Components/WatchPage";
import Results from "../Components/Results";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <Results />,
      },
    ],
  },
]);

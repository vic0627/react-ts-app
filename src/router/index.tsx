import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "@pages/Layout";
import Signin from "@pages/signin/Signin";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "signin",
        element: <Signin />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;

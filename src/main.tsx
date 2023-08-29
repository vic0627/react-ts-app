import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "@store";
import router from "@router";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root") ?? document.body).render(
  <Provider store={store}>
    <CssBaseline>
      <RouterProvider router={router} />
    </CssBaseline>
  </Provider>
);

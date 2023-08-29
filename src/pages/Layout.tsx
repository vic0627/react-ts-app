import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import io from "socket.io-client";
import { useEffect } from "react";

export default function Layout() {
  useEffect(() => {
    const socket = io("ws://localhost:3002/", {
      auth: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTcxYjM1MWJmYTUyMDU1NzE0ZjA5MSIsIm5hbWUiOiLosazmjpLlr7blr7YiLCJpYXQiOjE2OTMxOTE5NTEsImV4cCI6MTY5MzM2NDc1MX0.axOoxLvoK0Ph6Vs1Y6cJG1IIvcWSS3jJreWJmvYIE2o"
      }
    });

    socket.on("connect", () => {
      console.log("connected");
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <Box>
      <Outlet />
    </Box>
  );
}

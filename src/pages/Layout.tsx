import { Outlet } from "react-router-dom";
import { Box, ThemeProvider, styled as muiStyled } from "@mui/material";
import styled from "styled-components";
// import io from "socket.io-client";
// import { useEffect } from "react";
import { ColorModeProvider, useColorMode } from "@utils";
import NavigationComponent from "@components/navigation/Navigation.component";
import { useEffect } from "react";
// import { useTodosQuery } from "@store/slices/api.slice";

declare global {
  interface ChildNode {
    style: CSSStyleDeclaration;
  }
}

const Background = muiStyled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default
}));

export default function Layout() {
  // const {
  //   data: res = [],
  //   isLoading,
  //   isSuccess,
  //   isError,
  //   error
  // } = useTodosQuery(null);

  // console.log({ res, isLoading, isSuccess, isError, error });

  const { theme, colorMode } = useColorMode();

  const handleResize = (e: UIEvent, root: ChildNode) => {
    root.style.setProperty("--vh", window.innerHeight / 100 + "px");
  };

  useEffect(() => {
    const root = document.childNodes[1];

    window.addEventListener("resize", (e) => handleResize(e, root));

    window.addEventListener("focus", () => {
      console.log("window focus");
    });
    window.addEventListener("blur", () => {
      console.log("window blur");
    });

    return () => {
      window.removeEventListener("resize", (e) => handleResize(e, root));

      window.removeEventListener("focus", () => {
        console.log("window focus");
      });
      window.removeEventListener("blur", () => {
        console.log("window blur");
      });
    };
  }, []);

  return (
    <ColorModeProvider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Background>
          <NavigationComponent />
          <Outlet />
        </Background>
      </ThemeProvider>
    </ColorModeProvider>
  );
}

import { useMemo, useState, createContext } from "react";
import { createTheme } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeProvider = ColorModeContext.Provider;

export function useColorMode() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((preMode) => (preMode === "light" ? "dark" : "light"));
      }
    }),
    []
  );
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return { theme, colorMode };
}

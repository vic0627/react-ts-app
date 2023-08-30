import { Box, styled } from "@mui/material";
import { grey } from "@mui/material/colors";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "stretch",
  width: 350,
  height: 350,
  borderRadius: " 0.5rem",
  boxShadow: `0.1rem 0.1rem 0.5rem 0 ${
    theme.palette.mode === "dark" ? grey[700] : grey[400]
  }`,
  padding: "2rem"
}));

export const ButtonGroup = styled(Box)(() => ({
  height: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

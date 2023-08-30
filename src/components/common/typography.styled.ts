import { styled as muiStyled } from "@mui/material";
import styled from "styled-components";
import { grey } from "@mui/material/colors";

const fontColor = (mode: string) => (mode === "dark" ? grey[50] : grey[900]);

export const H1 = muiStyled(styled.h1`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const H2 = muiStyled(styled.h2`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const H3 = muiStyled(styled.h3`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const H4 = muiStyled(styled.h4`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const H5 = muiStyled(styled.h5`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const H6 = muiStyled(styled.h6`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const P = muiStyled(styled.p`
  transition: color 0.25s ease-in-out;
`)(({ theme }) => ({
  color: theme.palette.text.secondary
}));

import { Box } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  width: 350px;
  height: 350px;
  border-radius: 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.5rem 0 gray;
  padding: 2rem;
`;

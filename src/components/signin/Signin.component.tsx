import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button
} from "@mui/material";
import styled from "styled-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, { useState, Dispatch, SetStateAction } from "react";
import { TabNames } from "./interface/signin.interface";
import { Wrapper } from "./styled/styled-signin-components";

export default function SigninComponent({
  switchTab
}: {
  switchTab: Dispatch<SetStateAction<TabNames>>;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickSwitchTab = () => switchTab(TabNames.forget);

  return (
    <Wrapper>
      <TextField
        id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        variant="standard"
      />
      <FormControl variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="standard-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained" color="primary">
        Signin
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickSwitchTab}>
        Forget Password
      </Button>
    </Wrapper>
  );
}

import { TextField, Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { TabNames } from "./interface/signin.interface";
import { Wrapper } from "./styled/styled-signin-components";

export default function ForgetComponent({
  switchTab
}: {
  switchTab: Dispatch<SetStateAction<TabNames>>;
}) {
  const handleClickSwitchTab = () => switchTab(TabNames.signin);
  return (
    <Wrapper>
      <TextField
        id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        variant="standard"
      />
      <Button variant="contained" color="primary">
        Send Code
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickSwitchTab}>
        Back To Signin
      </Button>
    </Wrapper>
  );
}

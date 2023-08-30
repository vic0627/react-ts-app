import { TextField, Button } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { TabNames } from "./interface/signin.interface";
import { Wrapper, ButtonGroup } from "./styled/styled-signin-components";
import { H3 } from "@components/common/typography.styled";

export default function ForgetComponent({
  switchTab
}: {
  switchTab: Dispatch<SetStateAction<TabNames>>;
}) {
  const handleClickSwitchTab = () => switchTab(TabNames.signin);
  return (
    <Wrapper>
      <H3>Forget your password?</H3>
      <TextField
        id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        variant="standard"
      />
      <ButtonGroup>
        <Button variant="contained" color="primary">
          Send Code
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickSwitchTab}
        >
          Back To Signin
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
}

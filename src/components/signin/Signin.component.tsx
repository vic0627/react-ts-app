import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  FormHelperText
} from "@mui/material";
import styled from "styled-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React, {
  useState,
  Dispatch,
  SetStateAction,
  useReducer,
  ChangeEvent
} from "react";
import { TabNames } from "./interface/signin.interface";
import { Wrapper, ButtonGroup } from "./styled/styled-signin-components";
import { initialSigninForm, signinFormReducer } from "./reducer/signin.reducer";
import { useAddTodoMutation, useTodosQuery } from "@store/slices/api.slice";

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

  const [signinForm, dispatchSigninForm] = useReducer(
    signinFormReducer,
    initialSigninForm
  );

  const verifySigninForm = (type: "email" | "password") => {
    const value = signinForm[type].value;

    const dispatchType = type === "email" ? "ERROR_EMAIL" : "ERROR_PASSWORD";
    const errorMessage =
      type === "email" ? "Email is required." : "Password is required.";

    new Promise(
      (resolve: (value: { error: boolean; errorMessage: string }) => void) => {
        if (value) resolve({ error: false, errorMessage: "" });
        resolve({ error: true, errorMessage });
      }
    ).then((res) => {
      const { error, errorMessage } = res;
      dispatchSigninForm({
        type: dispatchType,
        payload: { error, errorMessage }
      });
    });
  };

  const handleChangeEmail = async (e: ChangeEvent<HTMLInputElement>) => {
    const payload = e.target.value;
    dispatchSigninForm({ type: "MODIFY_EMAIL", payload });
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const payload = e.target.value;
    dispatchSigninForm({ type: "MODIFY_PASSWORD", payload });
  };

  const [addTodo, { isLoading }] = useAddTodoMutation();

  const handleSubmit = async () => {
    try {
      const res = await addTodo({
        title: signinForm.email.value,
        description: signinForm.password.value
      }).unwrap();

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <TextField
        error={signinForm.email.error}
        helperText={signinForm.email.errorMessage}
        id="standard-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        variant="standard"
        onChange={handleChangeEmail}
      />
      <FormControl variant="standard" error={signinForm.password.error}>
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
          onChange={handleChangePassword}
        />
        <FormHelperText>{signinForm.password.errorMessage}</FormHelperText>
      </FormControl>
      <ButtonGroup>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Signin
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickSwitchTab}
        >
          Forget Password
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
}

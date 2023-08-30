export interface SigninFormState {
  email: {
    value: string;
    error: boolean;
    errorMessage: string;
  };
  password: {
    value: string;
    error: boolean;
    errorMessage: string;
  };
}

export type SigninFormAction =
  | { type: "MODIFY_EMAIL"; payload: string }
  | { type: "MODIFY_PASSWORD"; payload: string }
  | { type: "ERROR_EMAIL"; payload: { error: boolean; errorMessage: string } }
  | {
      type: "ERROR_PASSWORD";
      payload: { error: boolean; errorMessage: string };
    };

export const initialSigninForm: SigninFormState = {
  email: {
    value: "",
    error: false,
    errorMessage: ""
  },
  password: {
    value: "",
    error: false,
    errorMessage: ""
  }
};

export const signinFormReducer = (
  state: SigninFormState,
  action: SigninFormAction
) => {
  switch (action.type) {
    case "MODIFY_EMAIL":
      return {
        ...state,
        email: {
          ...state.email,
          value: action.payload
        }
      };
    case "MODIFY_PASSWORD":
      return {
        ...state,
        password: {
          ...state.password,
          value: action.payload
        }
      };
    case "ERROR_EMAIL":
      return {
        ...state,
        email: {
          ...state.email,
          error: action.payload.error,
          errorMessage: action.payload.errorMessage
        }
      };
    case "ERROR_PASSWORD":
      return {
        ...state,
        password: {
          ...state.password,
          error: action.payload.error,
          errorMessage: action.payload.errorMessage
        }
      };
    default:
      return state;
  }
};

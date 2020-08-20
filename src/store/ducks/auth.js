import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ["email", "password"],
  signInSuccess: ["data", "oAuth", "fail"]
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: !!JSON.parse(localStorage.getItem("@Enterprises:oAuth")),
  oAuth: JSON.parse(localStorage.getItem("@Enterprises:oAuth")) || null,
  fail: null
});

/* Reducers */

export const success = (state, { oAuth, fail }) => {
  if (fail === true) {
    return { ...state, signedIn: false, oAuth, fail };
  } else return { ...state, signedIn: true, oAuth, fail };
};

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success
});

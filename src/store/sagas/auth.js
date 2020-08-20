import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { actions as toastrActions } from "react-redux-toastr";
import api from "../../services/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(
      api.post,
      "https://empresas.ioasys.com.br/api/v1/users/auth/sign_in",
      {
        email,
        password
      }
    );

    const { data } = response.data;

    const oAuth = {
      "access-token": response.headers["access-token"],
      client: response.headers.client,
      uid: response.headers.uid
    };

    localStorage.setItem("@Enterprises:oAuth", JSON.stringify(oAuth));

    yield put(AuthActions.signInSuccess(data, oAuth, false));
    yield put(push("/enterprises"));
  } catch (error) {
    console.log(error);
    if (error.response && error.response.status === 401) {
      yield put(
        toastrActions.add({
          type: "error",
          title: "Falha no login",
          message:
            "Credenciais inválidas, verifique seus dados e tente novamente."
        })
      );
    } else {
      yield put(
        toastrActions.add({
          type: "error",
          title: "Erro interno",
          message:
            "Falha ao comunicar com o servidor, tente novamente mais tarde."
        })
      );
    }
    yield put(AuthActions.signInSuccess(null, null, true));
  }
}

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "../../../store/ducks/auth";

import { Container } from "./styles";
import logoIoasys from "../../../assets/logo-ioasys-pink.png";
import Loader from "react-loader-spinner";

const SignIn = ({ signInRequest }) => {
  const state = useSelector(state => state);

  useEffect(() => {
    if (state.auth.fail) setLoading(false);
  }, [state]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    signInRequest(email, password);
  };

  return (
    <>
      <Container>
        <div className="card">
          <img src={logoIoasys} alt="Ioasys" />
          <h1>BEM-VINDO AO EMPRESAS</h1>
          <p>
            Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.
          </p>
          <form onSubmit={handleSubmit}>
            <span>EMAIL</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <span>SENHA</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {!loading ? (
              <button type="submit">ENTRAR</button>
            ) : (
              <button type="button">
                <Loader
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  type="ThreeDots"
                  color="#fff"
                  height={50}
                  width={50}
                />
              </button>
            )}
          </form>
        </div>
      </Container>
    </>
  );
};

SignIn.propTypes = {
  signInRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);

export default connect(null, mapDispatchToProps)(SignIn);

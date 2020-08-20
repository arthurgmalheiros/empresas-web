import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import { push } from "connected-react-router";

import ListHeader from "../../../components/ListHeader";
import { Container } from "./styles";
import logoEnterprise from "../../../assets/logo-enterprise.png";
import Loader from "react-loader-spinner";

export default function EnterpriseInfo({ history }) {
  const id = history.location.state.id;

  const [enterprise, setEnterprise] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadEnterprise() {
      try {
        setLoading(true);
        const oAuth = JSON.parse(
          localStorage.getItem("@Enterprises:oAuth") || "{}"
        );
        const response = await api.get(
          `https://empresas.ioasys.com.br/api/v1/enterprises/${id}`,
          { headers: oAuth }
        );
        setEnterprise(response.data.enterprise);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("@Enterprises:oAuth");
          push("/");
        }
      } finally {
        setLoading(false);
      }
    }
    loadEnterprise();
  }, [id]);

  return (
    <>
      <ListHeader goBack={true} />
      {enterprise.enterprise_name && (
        <Container>
          <div className="card">
            <img src={logoEnterprise} alt={enterprise.enterprise_name} />
            <h1>{enterprise.enterprise_name}</h1>
            <span>{`${enterprise.city}, ${enterprise.country}`}</span>
            <p>{enterprise.description}</p>
          </div>
        </Container>
      )}
      <Loader
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        type="Rings"
        color="#ef5781"
        height={100}
        width={100}
        visible={loading}
      />
    </>
  );
}

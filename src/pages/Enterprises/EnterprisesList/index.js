import React, { useState, useEffect } from "react";
import api from "../../../services/api";
import history from "../../../routes/history";

import ListHeader from "../../../components/ListHeader";
import { Container } from "./styles";
import logoEnterprise from "../../../assets/logo-enterprise.png";
import Loader from "react-loader-spinner";

const EnterpriseList = () => {
  const [loading, setLoading] = useState(false);

  const [enterprises, setEnterprises] = useState([]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    async function loadEnterprises() {
      try {
        setLoading(true);
        const oAuth = JSON.parse(
          localStorage.getItem("@Enterprises:oAuth") || "{}"
        );
        const response = await api.get(
          "https://empresas.ioasys.com.br/api/v1/enterprises",
          { headers: oAuth, params: { name: filter } }
        );
        setEnterprises(response.data.enterprises);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("@Enterprises:oAuth");
          window.location.reload();
        }
      } finally {
        setLoading(false);
      }
    }
    loadEnterprises();
  }, [filter]);

  return (
    <>
      <ListHeader
        filter={filter}
        setFilter={setFilter}
        enterprises={enterprises}
        setEnterprises={setEnterprises}
      />
      <Container>
        {enterprises.map(enterprise => (
          <div
            className="card"
            key={enterprise.id}
            onClick={() =>
              history.push("/enterpriseinfo", { id: enterprise.id })
            }
            data-testid="enterprise-card"
          >
            <div className="logo">
              <img src={logoEnterprise} alt={enterprise.enterprise_name} />
            </div>
            <div className="description">
              <h1>{enterprise.enterprise_name}</h1>
              <span>{enterprise.enterprise_type.enterprise_type_name}</span>
              <p>{enterprise.country}</p>
            </div>
          </div>
        ))}
      </Container>
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
};

export default EnterpriseList;

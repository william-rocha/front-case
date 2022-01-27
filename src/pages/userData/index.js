import React, { useEffect, useState } from "react";

import "./style.css";
import api from "../../services/api";
import ClientForm from "./form";
import Loading from "../../components/loading";

const UserData = () => {
  const [clientData, setClientData] = useState(null);

  const getClients = async (id) => {
    try {
      const resp = await api.get("/client/1");
      const userData = await resp.data;
      setClientData(null);
      setClientData({
        userData: {
          completeName: userData.name,
          cpf: userData.cpf,
          birthDate: userData.birth,
          cellPhone: userData.telPhone,
          phoneFixed: userData.telFixed,
          email: userData.email,
          alertEmail: Boolean(userData.emailAlert),
        },
        logo: userData.logo,
        address: {
          cep: userData.cep,
          street: userData.street,
          number: userData.number,
          district: userData.district,
          city: userData.city,
          state: userData.state,
          adressAlertEmail: Boolean(userData.userEmailAlert),
        },
      });
    } catch (err) {
      setClientData(null);
    }
  };

  useEffect(() => {
    const id = 1;
    getClients(id);
  }, []);

  return (
    <>
      {clientData !== null ? (
        <ClientForm initialValues={clientData} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default UserData;

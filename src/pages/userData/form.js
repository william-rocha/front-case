import React, { useEffect, useState } from "react";

import Input from "../../components/inputForms/input";
import Check from "../../components/inputForms/check";
import TitleForm from "../../components/inputForms/titleForm";
import UploadImgs from "../../components/inputForms/uploadImgs";
import InputMasked from "../../components/inputForms/inputMask";
import Button from "../../components/button";
import BtnLink from "../../components/inputForms/btnLink";
import InputDate from "../../components/inputForms/inputDate";

import { SignupSchema } from "./validation";
import { Col, Row } from "react-bootstrap";
import { Formik, Form } from "formik";

import "./style.css";
import moment from "moment";
import api from "../../services/api";
const ClientForm = ({ initialValues }) => {
  const [disableAll, setDisableAll] = useState(true);
  const [startDate, setStartDate] = useState("");
  const getClients = async (values) => {
    try {
      const formClient = await values;

      const objClient = await {
        completeName: formClient.userData.completeName,
        cpf: formClient.userData.cpf,
        birthDate: formClient.userData.birthDate,
        cellPhone: formClient.userData.cellPhone,
        phoneFixed: formClient.userData.phoneFixed,
        email: formClient.userData.email,
        alertEmail: formClient.userData.alertEmail,
        logo: formClient.logo,
        cep: formClient.address.cep,
        street: formClient.address.street,
        number: formClient.address.number,
        district: formClient.address.district,
        city: formClient.address.city,
        state: formClient.address.state,
        adressAlertEmail: formClient.address.adressAlertEmail,
      };
      const resp = await api.put("/client/1", JSON.stringify(objClient));
      const userData = resp.data;
    } catch (err) {}
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          getClients(values);
        }}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form className="row g-3" style={{ margin: "52px 0" }}>
            <TitleForm
              link={
                <BtnLink
                  disableAll={disableAll}
                  onClick={() => setDisableAll((prev) => !prev)}
                />
              }
            >
              Dados pessoais{" "}
            </TitleForm>

            <Row>
              <Col>
                <Input
                  label="Nome Completo"
                  name="userData.completeName"
                  errors={errors}
                  // value={initialValues.userData.completeName}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <InputMasked
                  mask="999.999.999-99"
                  label="CPF"
                  name="userData.cpf"
                  onChange={async (e) => {
                    const value = (await e.target.value) || "";
                    const valueWithoutSymbols = await value.replace(/\D/g, "");
                    initialValues.userData.cpf = await valueWithoutSymbols;
                    setFieldValue("userData.cpf", valueWithoutSymbols);
                  }}
                  value={initialValues.userData.cpf}
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>

              <Col sm={4}>
                <InputDate
                  label="Data de nascimento"
                  name="userData.birthDate"
                  onChange={async (date) => {
                    setStartDate(date);
                    initialValues.userData.birthDate = await date;
                    setFieldValue(
                      "userData.birthDate",
                      moment(date).format("DD/MM/YYYY")
                    );
                    moment(date).format("DD/MM/YYYY");
                  }}
                  value={initialValues.userData.birthDate}
                  selected={startDate}
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <InputMasked
                  mask="(99) 9 9999-9999"
                  label="Telefone Celular"
                  name="userData.cellPhone"
                  onChange={async (e) => {
                    const value = (await e.target.value) || "";
                    const valueWithouSymbols = await value.replace(/\D/g, "");
                    initialValues.userData.cellPhone = valueWithouSymbols;
                    setFieldValue("userData.cellPhone", valueWithouSymbols);
                  }}
                  value={initialValues.userData.cellPhone}
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
              <Col sm={4}>
                <InputMasked
                  mask="(99) 9999-9999"
                  label="Telefone fixo"
                  name="userData.phoneFixed"
                  onChange={async (e) => {
                    const value = (await e.target.value) || "";
                    const valueWithouSymbols = await value.replace(/\D/g, "");
                    initialValues.userData.phoneFixed = await value;
                    setFieldValue("userData.phoneFixed", valueWithouSymbols);
                  }}
                  value={initialValues.userData.phoneFixed}
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  label="E-mail"
                  name="userData.email"
                  type="email"
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>
            <Check
              name="userData.alertEmail"
              label="Quero receber alertas, promoções e novidades por email"
            />
            {/* UPLOUD IMG */}
            <TitleForm>Logotipo</TitleForm>
            <UploadImgs
              name="logo"
              setFieldValue={setFieldValue}
              disabled={disableAll}
              value={initialValues.logo}
            />
            <TitleForm>Endereço</TitleForm>
            <Row>
              <Col sm={4}>
                <InputMasked
                  mask="99999-999"
                  label="CEP"
                  name="address.cep"
                  onChange={async (e) => {
                    const value = (await e.target.value) || "";
                    const valueWithoutSymbols = await value.replace(/\D/g, "");
                    initialValues.address.cep = await valueWithoutSymbols;
                    setFieldValue("address.cep", valueWithoutSymbols);
                  }}
                  value={initialValues.address.cep}
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
              <Col sm={8}>
                <Input
                  label="Rua"
                  name="address.street"
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <Input
                  label="Número"
                  name="address.number"
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
              <Col sm={8}>
                <Input
                  label="Bairro"
                  name="address.district"
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>
                <Input
                  label="Cidade"
                  name="address.city"
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
              <Col sm={4}>
                <Input
                  label="Estado"
                  name="address.state"
                  errors={errors}
                  touched={touched}
                  disabled={disableAll}
                />
              </Col>
            </Row>
            <Check
              name="address.adressAlertEmail"
              label="Quero receber alertas, promoções e novidades por email"
            />
            <Button
              type="submit"
              //  disabled={isSubmitting || disableAll}
            >
              Editar dados
            </Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ClientForm;

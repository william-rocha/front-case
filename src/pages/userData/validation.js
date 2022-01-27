import * as Yup from "yup";
const requidedField = "Campo obrigatório";
export const SignupSchema = Yup.object().shape({
  userData: Yup.object().shape({
    completeName: Yup.string()
      .min(2, "Muito curto!")
      .max(50, "Muito longo!")
      .required(requidedField),
    cpf: Yup.string().required(requidedField).nullable(true),
    birthDate: Yup.string().nullable(true),
    cellPhone: Yup.string()
      .min(9, "Este campo não corresponde um número valido")
      .required(requidedField)
      .nullable(true),
    phoneFixed: Yup.string().nullable(true),
    email: Yup.string()
      .email("E-mail inválido")
      .required(requidedField)
      .nullable(true),
    alertEmail: Yup.boolean().nullable(true),
  }),
  logo: Yup.string().nullable(true),
  address: Yup.object().shape({
    cep: Yup.string()
      .matches(/^\d+$/, "Este campo deve conter apenas números")
      .required(requidedField)
      .nullable(true),
    street: Yup.string().nullable(true),
    number: Yup.string()
      .matches(/^\d+$/, "Este campo deve conter apenas números")
      .nullable(true),
    district: Yup.string().nullable(true),
    city: Yup.string().nullable(true),
    state: Yup.string().nullable(true),
    adressAlertEmail: Yup.boolean().nullable(true),
  }),
});

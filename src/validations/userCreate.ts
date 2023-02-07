import * as yup from "yup";

export const userCreateValidation = yup.object({
  name: yup.string().required("Digite seu nome de usuário!"),
  email: yup.string().required("Digite seu email!").email("Formato de email inválido"),
  password: yup.string().required().min(6, "Sua senha deve conter no mínimo 6 digitos!"),
  phone: yup.string().nullable(true)
});
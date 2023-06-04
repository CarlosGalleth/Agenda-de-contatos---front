import * as yup from "yup";
export function formSchema() {
  return yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email incorreto"),
    password: yup.string().required("Senha obrigatória"),
  });
}

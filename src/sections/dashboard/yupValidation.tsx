import * as yup from "yup";
export function formSchema() {
  return yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "O nome deve conter pelo menos 3 caracteres")
      .max(200, "O nome é muito grande"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    phone: yup
      .string()
      .required("Telefone obrigatório")
      .min(8, "O mínimo de números é 8")
      .max(9, "O máximo de números é 9"),
  });
}

import { useForm } from "react-hook-form";
import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { CredentialsBackground } from "../login/login&registerPageStyled";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./yupValidation";
import { iRegisterFormData } from "../../types/types";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { api } from "../../services/services";

export const RegisterPage = () => {
  const { token, navigate }: any = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(formSchema()),
  });

  const getData = (data: iRegisterFormData) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
    };
    async function fetchData() {
      try {
        const response = await api.post("users", user);
        response.status === 201 && navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  };

  return (
    <CredentialsBackground>
      <StyledFormContainer noValidate onSubmit={handleSubmit(getData)}>
        <div className="credentialsBox-top">
          <h1>Cadastrar</h1>
          <span>
            Já possui uma conta? Faça <Link to={"/"}>Login</Link>
          </span>
        </div>
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Digite seu email..."
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite sua Senha..."
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input
            type="tel"
            placeholder="Digite seu telefone..."
            {...register("phone")}
          />
          {errors.phone?.message && <p>{errors.phone.message}</p>}
        </div>
        <button type="submit">Cadastrar</button>
      </StyledFormContainer>
    </CredentialsBackground>
  );
};

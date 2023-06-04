import { Link } from "react-router-dom";
import { CredentialsBackground } from "./login&registerPageStyled";
import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { useForm } from "react-hook-form";
import { formSchema } from "./yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { iLoginFormData } from "../../types/types";
import { api } from "../../services/services";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import jwtDecode from "jwt-decode";

export const LoginPage = () => {
  const { token, navigate }: any = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(formSchema()),
  });
  function getData(data: iLoginFormData) {
    async function fetchData() {
      try {
        const response = await api.post("login", data);
        const userJwt: { sub: string } = jwtDecode(response.data.token);
        const user = await api.get(`users/${userJwt.sub}`, {
          headers: {
            authorization: `Bearer ${response.data.token}`,
          },
        });
        response.status === 201 && navigate(`dashboard/${user.data.name}`);
        localStorage.setItem("@TOKEN", response.data.token);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  return (
    <CredentialsBackground>
      <StyledFormContainer onSubmit={handleSubmit(getData)}>
        <div className="credentialsBox-top">
          <h1>Login</h1>
          <span>
            Não tem uma conta? <Link to={"/register"}>Cadastrar</Link>
          </span>
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
            placeholder="Digite sua senha..."
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Login</button>
      </StyledFormContainer>
    </CredentialsBackground>
  );
};

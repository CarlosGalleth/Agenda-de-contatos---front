import { Link } from "react-router-dom";
import { CredentialsBackground } from "./login&registerPageStyled";
import { StyledFormContainer } from "../../globalComponents/styledFormContainer";

export const LoginPage = () => {
  return (
    <CredentialsBackground>
      <StyledFormContainer>
        <div className="credentialsBox-top">
          <h1>Login</h1>
          <p>
            Não tem uma conta? <Link to={"/register"}>Cadastrar</Link>
          </p>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite seu email..." />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="text" placeholder="Digite sua senha..." />
        </div>
        <button type="submit">Login</button>
      </StyledFormContainer>
    </CredentialsBackground>
  );
};

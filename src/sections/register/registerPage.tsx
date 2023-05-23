import { CredentialsBackground } from "../login/login&registerPageStyled";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <CredentialsBackground>
      <div className="credentialsBox">
        <div className="credentialsBox-top">
          <h1>Cadastrar</h1>
          <p>
            Já possui uma conta? Faça <Link to={"/"}>Login</Link>
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
        <button>Login</button>
      </div>
    </CredentialsBackground>
  );
};

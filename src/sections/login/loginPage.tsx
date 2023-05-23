import { Link } from "react-router-dom";
import { CredentialsBackground } from "./login&registerPageStyled";

export const LoginPage = () => {
  return (
    <CredentialsBackground>
      <div className="credentialsBox">
        <div className="credentialsBox-top">
          <h1>Login</h1>
          <p>
            Não tem uma conta? <Link to={"/register"}>Cadastrar</Link>
          </p>
        </div>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" placeholder="Digite seu nome..." />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Digite seu email..." />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="text" placeholder="Digite sua Senha..." />
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input type="text" placeholder="Digite seu telefone..." />
        </div>
        <button>Cadastrar</button>
      </div>
    </CredentialsBackground>
  );
};

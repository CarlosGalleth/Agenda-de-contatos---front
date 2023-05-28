import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { UpdateModalStyled } from "./dashboardStyled";

export const UpdateModal = ({ setModal }: any) => {
  return (
    <UpdateModalStyled>
      <StyledFormContainer>
        <div className="modalHeader">
          <h2>Atualizar Perfil</h2>
          <button onClick={() => setModal(false)}>X</button>
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
        <div className="confirmUpdate">
          <button onClick={() => setModal(false)}>Atualizar</button>
        </div>
      </StyledFormContainer>
    </UpdateModalStyled>
  );
};

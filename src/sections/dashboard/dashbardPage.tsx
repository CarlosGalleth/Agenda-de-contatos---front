import {
  ContactsTitleBar,
  DashboardBackgroundStyled,
  UserContacts,
  UserInfoBox,
} from "./dashboardStyled";
import defaultUser from "../../assets/default-user.jpg";
import { useState } from "react";
import { UpdateModal } from "./updateModal";

export const DashBoardPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <DashboardBackgroundStyled>
      <>{modal && <UpdateModal setModal={setModal} />}</>
      <main className="container">
        <UserInfoBox>
          <img src={defaultUser} alt="" />
          <div className="userInfoBox">
            <div className="userInfo">
              <div>
                <p>Nome: </p>
              </div>
              <div>
                <p>Telefone: </p>
              </div>
            </div>
            <div className="userInfo">
              <div>
                <p>Email: </p>
              </div>
              <div>
                <p>Senha: ****</p>
              </div>
            </div>
            <div className="anchorBox">
              <span onClick={() => setModal(true)}>Editar perfil</span>
              <span>Deslogar</span>
            </div>
          </div>
        </UserInfoBox>
        <ContactsTitleBar>
          <h1>Contatos</h1>
        </ContactsTitleBar>
        <UserContacts>
          <li>
            <img src={defaultUser} alt="" />
            <div>
              <p>Nome:</p>
              <p>Email:</p>
              <p>Telefone:</p>
            </div>
          </li>
        </UserContacts>
      </main>
    </DashboardBackgroundStyled>
  );
};

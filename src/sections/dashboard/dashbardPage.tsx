import {
  ContactsTitleBar,
  DashboardBackgroundStyled,
  UserContacts,
  UserInfoBox,
} from "./dashboardStyled";
import defaultUser from "../../assets/default-user.jpg";

export const DashBoardPage = () => {
  return (
    <DashboardBackgroundStyled>
      <main className="container">
        <UserInfoBox>
          <img src={defaultUser} alt="" />
          <div className="userInfoBox">
            <div className="userInfo">
              <div>
                <p>Nome: </p>
                <span>Editar nome</span>
              </div>
              <div>
                <p>Telefone: </p>
                <span>Editar telefone</span>
              </div>
            </div>
            <div className="userInfo">
              <div>
                <p>Email: </p>
                <span>Editar email</span>
              </div>
              <div>
                <p>Senha: ****</p>
                <span>Editar senha</span>
              </div>
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

import {
  ContactsTitleBar,
  DashboardBackgroundStyled,
  UserContacts,
  UserInfoBox,
} from "./dashboardStyled";
import defaultUser from "../../assets/default-user.jpg";
import { useContext, useEffect, useState } from "react";
import { UpdateModal } from "./updateModal";
import { UserContext } from "../../contexts/userContext";
import { api } from "../../services/services";
import jwtDecode from "jwt-decode";
import { Contact } from "./components/contactComponent";
import { CreateContactModal } from "./createContactModal";
import { UpdateContactModal } from "./updateContactModal";

export const DashBoardPage = () => {
  const { token, navigate }: any = useContext(UserContext);
  const [contactsList, setContactsList]: any = useState([]);
  const [modal, setModal] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [user, setUser]: any = useState({});
  const [contact, setContact] = useState({});
  const userJwt: { sub: string } = jwtDecode(token);

  const handleLogoff = () => {
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  useEffect(() => {
    const getUser = async () => {
      const user = await api.get(`users/${userJwt.sub}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(user.data);
    };
    getUser();
  }, [user, token]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const response = await api.get("contacts", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setContactsList(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, [contactsList, token]);

  return (
    <DashboardBackgroundStyled>
      {modal && (
        <UpdateModal setModal={setModal} user={user} userId={userJwt.sub} />
      )}
      {modalCreate && <CreateContactModal setModalCreate={setModalCreate} />}
      {modalUpdate && (
        <UpdateContactModal setModalUpdate={setModalUpdate} contact={contact} />
      )}
      <main className="container">
        <UserInfoBox>
          <img src={defaultUser} alt="" />
          <div className="userInfoBox">
            <div className="userInfo">
              <div>
                <p>Nome: {user.name}</p>
              </div>
              <div>
                <p>Telefone: {user.phone}</p>
              </div>
            </div>
            <div className="userInfo">
              <div>
                <p>Email: {user.email}</p>
              </div>
              <div>
                <p>Senha: ***</p>
              </div>
            </div>
            <div className="anchorBox">
              <span onClick={() => setModal(true)}>Editar perfil</span>
              <span onClick={() => handleLogoff()}>Deslogar</span>
            </div>
          </div>
        </UserInfoBox>
        <ContactsTitleBar>
          <h1>Contatos</h1>
          <span onClick={() => setModalCreate(true)}>Criar contato</span>
        </ContactsTitleBar>
        <UserContacts>
          <>
            {contactsList.map((contact: any, index: number) => {
              return (
                <Contact
                  key={index}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                  contactId={contact.id}
                  setContact={setContact}
                  setModalUpdate={setModalUpdate}
                />
              );
            })}
          </>
        </UserContacts>
      </main>
    </DashboardBackgroundStyled>
  );
};

import { ContactStyled } from "../dashboardStyled";
import defaultUser from "../../../assets/default-user.jpg";
import { api } from "../../../services/services";
import { UserContext } from "../../../contexts/userContext";
import { useContext } from "react";

export const Contact = ({
  name,
  email,
  phone,
  contactId,
  setContact,
  setModalUpdate,
}: any) => {
  const { token, navigate }: any = useContext(UserContext);
  const contact = {
    id: contactId,
    name: name,
    email: email,
    phone: phone,
  };
  const handleUpdate = () => {
    setContact(contact);
    setModalUpdate(true);
  };
  const handleDelete = () => {
    async function deleteContact() {
      await api.delete(`contacts/${contactId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
    deleteContact();
  };
  return (
    <ContactStyled>
      <div className="contact">
        <img src={defaultUser} alt="" />
        <div className="contactInfo">
          <p>Nome: {name}</p>
          <p>Email: {email}</p>
          <p>Telefone: {phone}</p>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="updateContact" onClick={() => handleUpdate()}>
          Atualizar Contato
        </button>
        <button className="deleteContact" onClick={() => handleDelete()}>
          Excluir Contato
        </button>
      </div>
    </ContactStyled>
  );
};

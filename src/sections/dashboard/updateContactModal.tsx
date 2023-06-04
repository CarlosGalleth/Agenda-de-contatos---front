import { useForm } from "react-hook-form";
import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { UpdateModalStyled } from "./dashboardStyled";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./yupValidation";
import { iContactRegisterData } from "../../types/types";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { api } from "../../services/services";

export const UpdateContactModal = ({ contact, setModalUpdate }: any) => {
  const { token, navigate }: any = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iContactRegisterData>({
    mode: "onChange",
    resolver: yupResolver(formSchema()),
  });
  const getData = (data: iContactRegisterData) => {
    const newContact = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    async function fetchData() {
      await api.patch(`contacts/${contact.id}`, newContact, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setModalUpdate(false);
    }
    fetchData();
  };
  return (
    <UpdateModalStyled>
      <StyledFormContainer onSubmit={handleSubmit(getData)}>
        <div className="modalHeader">
          <h2>Atualizar Contato</h2>
          <button onClick={() => setModalUpdate(false)}>X</button>
        </div>
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            defaultValue={contact.name}
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Digite seu email..."
            defaultValue={contact.email}
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu telefone..."
            defaultValue={contact.phone}
            {...register("phone")}
          />
          {errors.phone?.message && <p>{errors.phone.message}</p>}
        </div>
        <div className="confirmUpdate">
          <button type="submit">Atualizar</button>
        </div>
      </StyledFormContainer>
    </UpdateModalStyled>
  );
};

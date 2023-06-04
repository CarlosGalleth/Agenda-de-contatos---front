import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { iContactRegisterData } from "../../types/types";
import { formSchema } from "./yupValidation";
import { UpdateModalStyled } from "./dashboardStyled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/services";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const CreateContactModal = ({ setModalCreate }: any) => {
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
    const contact = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    async function fetchData() {
      const response = await api.post(`contacts`, contact, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setModalCreate(false);
    }
    fetchData();
  };

  return (
    <UpdateModalStyled>
      <StyledFormContainer onSubmit={handleSubmit(getData)}>
        <div className="modalHeader">
          <h2>Criar Contato</h2>
          <button onClick={() => setModalCreate(false)}>X</button>
        </div>
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
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
          <label htmlFor="">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu telefone..."
            {...register("phone")}
          />
          {errors.phone?.message && <p>{errors.phone.message}</p>}
        </div>
        <div className="confirmUpdate">
          <button type="submit">Criar</button>
        </div>
      </StyledFormContainer>
    </UpdateModalStyled>
  );
};

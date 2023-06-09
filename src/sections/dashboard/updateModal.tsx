import { useForm } from "react-hook-form";
import { formSchema } from "../../sections/register/yupValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { StyledFormContainer } from "../../globalComponents/styledFormContainer";
import { UpdateModalStyled } from "./dashboardStyled";
import { iRegisterFormData } from "../../types/types";
import { api } from "../../services/services";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

export const UpdateModal = ({ setModal, user, userId }: any) => {
  const { token, navigate }: any = useContext(UserContext);
  const acUser = {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    mode: "onChange",
    resolver: yupResolver(formSchema()),
  });
  const getData = (data: iRegisterFormData) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data?.password,
      phone: data.phone,
    };
    async function fetchData() {
      await api.patch(`users/${userId}`, user, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setModal(false);
    }
    fetchData();
  };

  const handleDelete = () => {
    async function deleteAccount() {
      await api.delete(`users/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setModal(false);
      navigate("/");
    }
    deleteAccount();
  };

  return (
    <UpdateModalStyled>
      <StyledFormContainer onSubmit={handleSubmit(getData)}>
        <div className="modalHeader">
          <h2>Atualizar Perfil</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div>
          <label htmlFor="">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome..."
            defaultValue={acUser.name}
            {...register("name")}
          />
          {errors.name?.message && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Digite seu email..."
            defaultValue={acUser.email}
            {...register("email")}
          />
          {errors.email?.message && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="Digite sua Senha..."
            {...register("password")}
          />
          {errors.password?.message && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label htmlFor="">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu telefone..."
            defaultValue={acUser.phone}
            {...register("phone")}
          />
          {errors.phone?.message && <p>{errors.phone.message}</p>}
        </div>
        <div className="confirmUpdate">
          <button type="submit">Atualizar</button>
        </div>
        <div className="deleteAccount">
          <button onClick={() => handleDelete()}>Excluir Conta</button>
        </div>
      </StyledFormContainer>
    </UpdateModalStyled>
  );
};

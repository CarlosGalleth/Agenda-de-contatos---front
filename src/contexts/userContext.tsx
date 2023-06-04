import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext: any = createContext({});

export const UserProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");
  return (
    <UserContext.Provider value={{ token, navigate }}>
      {children}
    </UserContext.Provider>
  );
};

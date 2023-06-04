import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./sections/login/loginPage";
import { RegisterPage } from "./sections/register/registerPage";
import { DashBoardPage } from "./sections/dashboard/dashbardPage";
import { UserProvider } from "./contexts/userContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />}>
          <Route path=":name" element={<DashBoardPage />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;

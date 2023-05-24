import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./sections/login/loginPage";
import { RegisterPage } from "./sections/register/registerPage";
import { DashBoardPage } from "./sections/dashboard/dashbardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashBoardPage />}>
        <Route path=":name" element={<DashBoardPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./sections/login/loginPage";
import { RegisterPage } from "./sections/register/registerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<></>}>
        <Route path=":name" element={<></>} />
      </Route>
    </Routes>
  );
}

export default App;

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as authService from "./services/authService";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CreatePage from "./components/CreatePage/CreatePage";
import Dashboard from "./components/Dashboard/Dashboard";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import EditPage from "./components/EditPage/EditPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import MyPetsPage from "./components/MyPetsPage/MyPetsPage";

function App() {
  const [userInfo, setUserInfo] = useState({
    isAuthenticated: false,
    username: "",
  });

  useEffect(() => {
    let user = authService.getUser();

    setUserInfo({
      isAuthenticated: Boolean(user),
      user,
    });
  }, []);

  const onLogin = username => {
    setUserInfo({
      isAuthenticated: true,
      user: username,
    });
  };
  return (
    <div id="container">
      <Header {...userInfo} />
      {/* <!-- Main Content --> */}
      <main id="site-content">
        <Routes>
          <Route path="/*" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage onLogin={onLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-page" element={<CreatePage />} />
          <Route path="/edit-page" element={<EditPage />} />
          <Route path="/my-pets" element={<MyPetsPage />} />
          <Route path="/details/:petId" element={<DetailsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

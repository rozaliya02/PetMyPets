import { Route, Routes } from "react-router-dom";
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
  return (
    <div id="container">
      <Header />
      {/* <!-- Main Content --> */}
      <main id="site-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-page" element={<CreatePage />} />
          <Route path="/edit-page" element={<EditPage />} />
          <Route path="/my-pets" element={<MyPetsPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

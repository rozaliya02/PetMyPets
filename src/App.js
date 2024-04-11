import "./App.css";
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
      <main id="site-content"></main>

      {/* <!-- Login Page ( Only for Guest users ) --> */}

      {/* <!-- Register Page ( Only for Guest users ) --> */}

      {/* <!-- Dashboard Page ( for Guests and Users ) --> */}

      {/* <!-- Details Page ( for Guests and Users ) --> */}

      {/* <!-- Create Page ( Only for logged-in users ) --> */}

      {/* <!-- Edit Page ( Only for the creator )--> */}

      {/* <!-- My Pets Page ( Only for logged-in users ) --> */}

      <Footer />
    </div>
  );
}

export default App;

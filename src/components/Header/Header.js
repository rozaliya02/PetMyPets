import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="site-header">
      {/* <!-- Navigation --> */}
      <nav class="navbar">
        <section class="navbar-dashboard">
          <Link to="/">Dashboard</Link>
          {/* <!-- Guest users --> */}
          <div id="guest">
            <Link class="button" to="/login">
              Login
            </Link>
            <Link class="button" to="/register">
              Register
            </Link>
          </div>
          {/* <!-- Logged-in users --> */}
          <div id="user">
            <span>Welcome, email</span>
            <Link class="button" to="/my-pets">
              My Pets
            </Link>
            <Link class="button" to="/create-page">
              Add Pet
            </Link>
            <Link class="button" to="/logout">
              Logout
            </Link>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;

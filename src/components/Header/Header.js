import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, user }) => {
  let guestNavigation = (
    <div id="guest">
      <Link class="button" to="/login">
        Login
      </Link>
      <Link class="button" to="/register">
        Register
      </Link>
    </div>
  );

  let userNavigation = (
    <div id="user">
      <span>Welcome, {user}</span>
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
  );
  return (
    <header id="site-header">
      <nav class="navbar">
        <section class="navbar-dashboard">
          <Link to="/">Dashboard</Link>
          {isAuthenticated ? userNavigation : guestNavigation}
        </section>
      </nav>
    </header>
  );
};

export default Header;

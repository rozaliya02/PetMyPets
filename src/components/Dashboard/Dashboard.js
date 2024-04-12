import PetList from "../PetList/PetList";
import { Route, Routes, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section id="dashboard-page" class="dashboard">
      <h1>Dashboard</h1>

      <nav>
        <Link to="type">type</Link>
      </nav>

      <section>
        <Routes>
          <Route path="/type" element={<p>Types...</p>} />
          <Route path="/" element={<PetList />} />
        </Routes>
      </section>
    </section>
  );
};

export default Dashboard;

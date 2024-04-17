import PetList from "../PetList/PetList";
import { Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <section id="dashboard-page" class="dashboard">
      <h1>Dashboard</h1>

      <section>
        <Routes>
          <Route path="/" element={<PetList />} />
        </Routes>
      </section>
    </section>
  );
};

export default Dashboard;

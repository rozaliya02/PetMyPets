import PetCard from "../PetCard/PetCard";
import * as petService from "../../services/petServices";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    petService.getAll().then(result => setPets(result));
  }, []);
  return (
    <section id="dashboard-page" class="dashboard">
      <h1>Dashboard</h1>
      {/* <!-- Display ul: with list-items for All pets (If any) --> */}
      <ul class="other-pets-list">
        {pets.map(x => (
          <PetCard key={x._id} pet={x} />
        ))}
      </ul>
      {/* <!-- Display paragraph: If there are no pets in the database --> */}
      <p class="no-pets">No pets in database!</p>
    </section>
  );
};

export default Dashboard;

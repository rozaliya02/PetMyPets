import PetCard from "../PetCard/PetCard";
import * as petService from "../../services/petServices";
import { useEffect, useState } from "react";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    petService.getAll().then(result => setPets(result));
  }, []);
  return (
    <>
      {pets.length > 0 ? (
        <ul class="other-pets-list">
          {pets.map(x => (
            <PetCard key={x._id} pet={x} />
          ))}
        </ul>
      ) : (
        <p class="no-pets">No pets in database!</p>
      )}
    </>
  );
};

export default PetList;

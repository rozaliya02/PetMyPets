import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as petServices from "../../services/petServices";

const DetailsPage = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(() => {
    async function fetchData() {
      let petResult = await petServices.getOne(petId);
      console.log(petResult);
      setPet(petResult);
    }

    fetchData();
  }, []);

  return (
    <section id="details-page" class="details">
      <div class="pet-information">
        <h3>{pet.name}</h3>
        <p class="type">Type: {pet.type}</p>
        <p class="img">
          <img src={pet.imageUrl} />
        </p>
        <div class="actions">
          {/* <!-- Edit/Delete buttons ( Only for creator of this pet )  --> */}
          <a class="button" href="#">
            Edit
          </a>
          <a class="button" href="#">
            Delete
          </a>

          {/* <!-- Bonus --> */}
          {/* <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) --> */}
          <a class="button" href="#">
            Like
          </a>

          {/* <!-- ( for Guests and Users )  --> */}
          <div class="likes">
            <img class="hearts" src="/images/heart.png" />
            <span id="total-likes">Likes: 0</span>
          </div>
          {/* <!-- Bonus --> */}
        </div>
      </div>
      <div class="pet-description">
        <h3>Description:</h3>
        <p>{pet.description}</p>
      </div>
    </section>
  );
};

export default DetailsPage;

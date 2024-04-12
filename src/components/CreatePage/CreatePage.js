import * as petServices from "../../services/petServices";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigate = useNavigate();

  const onPetCreate = e => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let name = formData.get("name");
    let description = formData.get("description");
    let imageUrl = formData.get("imageUrl");
    let type = formData.get("type");

    petServices.create({ name, description, imageUrl, type }).then(result => {
      navigate("/");
    });
  };
  return (
    <section id="create-page" class="create">
      <form id="create-form" method="POST" onSubmit={onPetCreate}>
        <fieldset>
          <legend>Add new Pet</legend>
          <p class="field">
            <label for="name">Name</label>
            <span class="input">
              <input type="text" name="name" id="name" placeholder="Name" />
            </span>
          </p>
          <p class="field">
            <label for="description">Description</label>
            <span class="input">
              <textarea
                name="description"
                id="description"
                placeholder="Description"
              ></textarea>
            </span>
          </p>
          <p class="field">
            <label for="image">Image</label>
            <span class="input">
              <input
                type="text"
                name="imageUrl"
                id="image"
                placeholder="Image"
              />
            </span>
          </p>
          <p class="field">
            <label for="type">Type</label>
            <span class="input">
              <select id="type" name="type">
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="parrot">Parrot</option>
                <option value="monkey">Monkey</option>
                <option value="reptile">Reptile</option>
                <option value="other">Other</option>
              </select>
            </span>
          </p>
          <input class="button submit" type="submit" value="Add Pet" />
        </fieldset>
      </form>
    </section>
  );
};

export default CreatePage;

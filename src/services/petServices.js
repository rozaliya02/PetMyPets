const baseUrl = "https://custom-service-9a5ad96c506f.herokuapp.com/jsonstore/";
export const getAll = async () => {
  let response = await fetch(`${baseUrl}/pets`);
  let pets = await response.json();
  let result = Object.values(pets);
  return result;
};

export const create = async petData => {
  console.log(petData);
  let response = await fetch(`${baseUrl}/pets`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(petData),
  });

  let result = await response.json();
  return result;
};

export const getOne = async petId => {
  let response = await fetch(`${baseUrl}/pets/${petId}`);
  let pet = await response.json();
  return pet;
};

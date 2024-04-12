const baseUrl = "https://custom-service-9a5ad96c506f.herokuapp.com/jsonstore/";
export const getAll = async () => {
  let response = await fetch(`${baseUrl}/pets`);
  let pets = await response.json();
  let result = Object.values(pets);
  return result;
};

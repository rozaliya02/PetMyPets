const baseUrl = "https://localhost:3030/jsonstore/";

export const login = ({ email, password }) => {
  return fetch(`${baseUrl}/users/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then(res => res.json());
};

export const getUser = () => {
  let username = localStorage.getItem("username");
  return username;
};

export const isAuthenticated = () => {
  return Boolean(getUser());
};

export const logout = () => {
  localStorage.removeItem("username");
};

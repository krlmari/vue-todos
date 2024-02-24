import axios from "axios";

const createTodosAxiosInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    headers: {
      Accept: "application/json",
    },
  });

const apiUrl = import.meta.env.VITE_API_URL_TODOS as string;

export const getTodos = () => {
  const axiosTodosInstance = createTodosAxiosInstance(apiUrl);
  return axiosTodosInstance.get("");
};

import axios from "redaxios";

const PORT = process.env.NODE_ENV === "production" ? "3001" : "3000";
axios.defaults.baseURL = `http://localhost:${PORT}/api`;

const useAxios = async ({ url, method, body = null, headers = null }) => {
  let response;
  let error;
  let loading = true;
  try {
    response = await axios(url, headers, method, JSON.parse(body));
    loading = false;
    return { response, error, loading };
  } catch (err) {
    error = err;
    loading = false;
    return { response, error, loading };
  }
};

export default useAxios;

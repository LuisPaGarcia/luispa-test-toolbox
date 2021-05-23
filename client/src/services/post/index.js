import axios from "redaxios";

axios.defaults.baseURL = "http://localhost:3000/api";

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
    return { response, error, loading };
  }
};

export default useAxios;

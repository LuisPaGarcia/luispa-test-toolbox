import axios from "redaxios";

axios.defaults.baseURL = "http://localhost:3000/api";

const useAxios = ({ url, method, body = null, headers = null }) => {
  let response;
  let error;
  let loading = true;

  return axios(url, headers, method, JSON.parse(body))
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      error = err;
    })
    .finally(() => {
      loading = false;
      return { response, error, loading };
    });
};

export default useAxios;

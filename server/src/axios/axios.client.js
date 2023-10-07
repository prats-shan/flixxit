import axios from "axios";

const obtain = async (url) => {
  const res = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "identity"
    }
  });
  return res.data;
};

export default {obtain };
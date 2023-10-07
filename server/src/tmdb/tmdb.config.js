const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const receiveUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { receiveUrl };
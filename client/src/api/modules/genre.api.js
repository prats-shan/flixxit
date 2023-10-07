import publicUser from "../client/public.client";

const genreEndpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`
};

const genreApi = {
  receiveList : async ({ mediaType }) => {
    try {
      const response = await publicUser.get(genreEndpoints.list({ mediaType }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default genreApi;
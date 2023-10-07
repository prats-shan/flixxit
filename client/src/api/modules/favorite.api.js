import privateUser from "../client/private.client";

const favoriteEndpoints = {
  list: "user/favorites",
  add: "user/favorites",
  clear: ({ favoriteId }) => `user/favorites/${favoriteId}`
};

const favoriteApi = {
  receiveList : async () => {
    try {
      const response = await privateUser.get(favoriteEndpoints.list);

      return { response };
    } catch (err) { return { err }; }
  },
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    mediaRate
  }) => {
    try {
      const response = await privateUser.post(
        favoriteEndpoints.add,
        {
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          mediaRate
        }
      );

      return { response };
    } catch (err) { return { err }; }
  },
  clear: async ({ favoriteId }) => {
    try {
      const response = await privateUser.delete(favoriteEndpoints.clear({ favoriteId }));

      return { response };
    } catch (err) { return { err }; }
  }
};

export default favoriteApi;
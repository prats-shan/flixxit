import privateUser from "../client/private.client";

const reviewEndpoints = {
  list: "reviews",
  add: "reviews",
  clear: ({ reviewId }) => `reviews/${reviewId}`
};

const reviewApi = {
  add: async ({
    mediaId,
    mediaType,
    mediaTitle,
    mediaPoster,
    content
  }) => {
    try {
      const response = await privateUser.post(
        reviewEndpoints.add,
        {
          mediaId,
          mediaType,
          mediaTitle,
          mediaPoster,
          content
        }
      );

      return { response };
    } catch (err) { return { err }; }
  },
  clear: async ({ reviewId }) => {
    try {
      const response = await privateUser.delete(reviewEndpoints.clear({ reviewId }));

      return { response };
    } catch (err) { return { err }; }
  },
  receiveList: async () => {
    try {
      const response = await privateUser.get(reviewEndpoints.list);

      return { response };
    } catch (err) { return { err }; }
  }
};

export default reviewApi;
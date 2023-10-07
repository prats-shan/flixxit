import privateUser from "../client/private.client";
import publicUser from "../client/public.client";

const mediaEndpoints = {
  list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
  detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
  search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`
};

const mediaApi = {
  receiveList : async ({ mediaType, mediaCategory, page }) => {
    try {
      const response = await publicUser.get(
        mediaEndpoints.list({ mediaType, mediaCategory, page })
      );

      return { response };
    } catch (err) { return { err }; }
  },
  receiveDetail: async ({ mediaType, mediaId }) => {
    try {
      const response = await privateUser.get(
        mediaEndpoints.detail({ mediaType, mediaId })
      );

      return { response };
    } catch (err) { return { err }; }
  },
  search: async ({ mediaType, query, page }) => {
    try {
      const response = await publicUser.get(
        mediaEndpoints.search({ mediaType, query, page })
      );

      return { response };
    } catch (err) { return { err }; }
  }
};

export default mediaApi;
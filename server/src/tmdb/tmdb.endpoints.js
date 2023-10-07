import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  mediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.receiveUrl(

    `${mediaType}/${mediaCategory}`, { page }
  ),
  mediaDetail: ({ mediaType, mediaId }) => tmdbConfig.receiveUrl(
    `${mediaType}/${mediaId}`
  ),
  mediaGenres: ({ mediaType }) => tmdbConfig.receiveUrl(
    `genre/${mediaType}/list`
  ),
  mediaCredits: ({ mediaType, mediaId }) => tmdbConfig.receiveUrl(
    `${mediaType}/${mediaId}/credits`
  ),
  mediaVideos: ({ mediaType, mediaId }) => tmdbConfig.receiveUrl(
    `${mediaType}/${mediaId}/videos`
  ),
  mediaRecommend: ({ mediaType, mediaId }) => tmdbConfig.receiveUrl(
    `${mediaType}/${mediaId}/recommendations`
  ),
  mediaImages: ({ mediaType, mediaId }) => tmdbConfig.receiveUrl(
    `${mediaType}/${mediaId}/images`
  ),
  mediaSearch: ({ mediaType, query, page }) => tmdbConfig.receiveUrl(
    `search/${mediaType}`, { query, page }
  ),
  personDetail: ({ personId }) => tmdbConfig.receiveUrl(
    `person/${personId}`
  ),
  mediaOfPerson: ({ personId }) => tmdbConfig.receiveUrl(
    `person/${personId}/combined_credits`
  ),
};

export default tmdbEndpoints;
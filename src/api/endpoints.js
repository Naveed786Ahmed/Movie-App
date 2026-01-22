export const ENDPOINTS = {
    // Movies
    TRENDING: "/trending/movie/day",
    POPULAR: "/movie/popular",
    TOP_RATED: "/movie/top_rated",
    UPCOMING: "/movie/upcoming",
    NOW_PLAYING: "/movie/now_playing",

    // Search & Discovery
    SEARCH_MOVIE: "/search/movie",
    GENRES: "/genre/movie/list",
    DISCOVER_BY_GENRE: "/discover/movie",

    // Movie Details
    MOVIE_DETAILS: (id) => `/movie/${id}`,
    CAST_CREW: (id) => `/movie/${id}/credits`,
    VIDEOS: (id) => `/movie/${id}/videos`,
    SIMILAR: (id) => `/movie/${id}/similar`,

    // TV Shows
    TV_POPULAR: "/tv/popular",
    TV_DETAILS: (id) => `/tv/${id}`,
    TV_SEASON: (tvId, seasonNumber) => `/tv/${tvId}/season/${seasonNumber}`,
};

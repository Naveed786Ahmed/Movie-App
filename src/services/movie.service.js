import axiosInstance from "../api/axiosInstance.js";
import { ENDPOINTS } from "../api/endpoints.js";

// Movies
export const fetchTrendingMovies = (page = 1) =>
    axiosInstance.get(ENDPOINTS.TRENDING, { params: { page } });

export const fetchPopularMovies = (page = 1) =>
    axiosInstance.get(ENDPOINTS.POPULAR, { params: { page } });

export const fetchTopRatedMovies = (page = 1) =>
    axiosInstance.get(ENDPOINTS.TOP_RATED, { params: { page } });

export const fetchUpcomingMovies = (page = 1) =>
    axiosInstance.get(ENDPOINTS.UPCOMING, { params: { page } });

export const fetchNowPlaying = (page = 1) =>
    axiosInstance.get(ENDPOINTS.NOW_PLAYING, { params: { page } });

// Search & Genres
export const searchMovies = (query, page = 1) =>
    axiosInstance.get(ENDPOINTS.SEARCH_MOVIE, { params: { query, page } });

export const fetchGenres = () => axiosInstance.get(ENDPOINTS.GENRES);

export const fetchMoviesByGenre = (genreId, page = 1) =>
    axiosInstance.get(ENDPOINTS.DISCOVER_BY_GENRE, {
        params: { with_genres: genreId, page },
    });

// Movie Details
export const fetchMovieDetails = (id) =>
    axiosInstance.get(ENDPOINTS.MOVIE_DETAILS(id));

export const fetchCastCrew = (id) =>
    axiosInstance.get(ENDPOINTS.CAST_CREW(id));

export const fetchVideos = (id) => axiosInstance.get(ENDPOINTS.VIDEOS(id));

export const fetchSimilarMovies = (id, page = 1) =>
    axiosInstance.get(ENDPOINTS.SIMILAR(id), { params: { page } });

// TV Shows
export const fetchPopularShows = (page = 1) =>
    axiosInstance.get(ENDPOINTS.TV_POPULAR, { params: { page } });

export const fetchTvDetails = (id) => axiosInstance.get(ENDPOINTS.TV_DETAILS(id));

export const fetchTvSeason = (tvId, seasonNumber) =>
    axiosInstance.get(ENDPOINTS.TV_SEASON(tvId, seasonNumber));

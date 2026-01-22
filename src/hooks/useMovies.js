import { useEffect, useState } from "react"
import {
    fetchTrendingMovies,
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchUpcomingMovies,
    fetchNowPlaying
} from "../services/movie.service"

export const useMovies = (type = "popular", page = 1) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const apiMap = {
            popular: fetchPopularMovies,
            trending: fetchTrendingMovies,
            topRated: fetchTopRatedMovies,
            upcoming: fetchUpcomingMovies,
            nowPLaying: fetchNowPlaying
        }

        const fetchData = async () => {
            setLoading(true);

            try {
                const apiCall = apiMap[type] || fetchPopularMovies;
                const data = await apiCall(page);                

                setMovies((prev) => {
                    return page === 1 ? data.results : [...prev, ...data.results]
                })

            } catch (error) {
                setError(error.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, [type, page]);

    return { movies, loading, error }
}


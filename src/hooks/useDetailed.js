import { useParams } from "react-router-dom"
import { fetchCastCrew, fetchMovieDetails, fetchSimilarMovies } from "../services/movie.service.js";
import { useEffect, useState } from "react";

export const useDetailed = () => {
    const [movieData, setMovieData] = useState(null);
    const [movieCast, setMovieCast] = useState(null);
    const [similarMovie, setSimilarMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true);

                const response = await fetchMovieDetails(id);
                const castResponse = await fetchCastCrew(id);
                const similarResponse = await fetchSimilarMovies(id);
                setMovieData(response);
                setMovieCast(castResponse);
                setSimilarMovie(similarResponse.results);

            } catch (error) {
                console.error("Error fetching movie details:", error);
            } finally {
                setLoading(false);
            }
        }

        if (id) {
            getDetails();
        }
    }, [id]);

    return { movieData, movieCast, similarMovie, loading };
}
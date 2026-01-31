import { useParams } from "react-router-dom"
import { fetchCastCrew, fetchMovieDetails } from "../services/movie.service.js";
import { useEffect, useState } from "react";

export const movieDetailed = () => {
    const [movieData, setMovieData] = useState(null);
    const [movieCast, setMovieCast] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true);

                const response = await fetchMovieDetails(id);
                const castResponse = await fetchCastCrew(id);
                setMovieData(response);
                setMovieCast(castResponse);

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

    return { movieData, movieCast, loading };
}
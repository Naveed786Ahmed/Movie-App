import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import { fetchMoviesByGenre } from "../services/movie.service";

export const useGenres = (page) => {
    const [genres, setGenres] = useState(null);
    const [loading, setLoading] = useState(true);
    const [genreName, setGenreName] = useState("");

    const { id } = useParams();
    const location = useLocation();    

    useEffect(() => {
        const getGenres = async () => {

            try {
                setLoading(true);

                const data = await fetchMoviesByGenre(id, page);
                setGenres((prev) => page === 1 ? data.results : [...prev, ...data.results]);
                setGenreName(location.state?.genreName);

            } catch (error) {
                console.error("Error Fetching Genres", error);
            } finally {
                setLoading(false);
            }

        }

        getGenres();
    }, [id, page]);

    return { genres, genreName, loading }
}
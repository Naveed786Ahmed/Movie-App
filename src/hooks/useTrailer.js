import { useEffect, useState } from "react"
import { fetchVideos } from "../services/movie.service"

export const useTrailer = (id) => {
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const getTrailer = async () => {
            try {
                setLoading(true);
                const response = await fetchVideos(id);

                const trailer = response.results?.find(
                    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
                );

                setTrailerKey(trailer ? trailer.key : response.results?.[0]?.key);
            } catch (error) {
                console.error("Error fetching trailer:", error);
            } finally {
                setLoading(false);
            }
        };

        getTrailer();
    }, [id]);

    return { trailerKey, loading };
}
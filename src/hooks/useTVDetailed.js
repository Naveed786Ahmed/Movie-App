import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { fetchSimilarTVshows, fetchTVCastCrew, fetchTvDetails } from "../services/movie.service";

export const useTVDetailed = () => {
    const [tvShows, setTvShows] = useState(null);
    const [tvShowCast, setTvShowCast] = useState(null);
    const [similartvShows, setSimilarTvShows] = useState(null);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true);

                const response = await fetchTvDetails(id);
                const TVCast = await fetchTVCastCrew(id)
                const similarTVShows =  await fetchSimilarTVshows(id);
                setTvShows(response);
                setTvShowCast(TVCast);
                setSimilarTvShows(similarTVShows);

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

    return { tvShows, similartvShows, tvShowCast, loading };
}
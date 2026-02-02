import { useEffect, useState } from "react";
import { validateSearch } from "../utils/validateSearch.js";
import { searchMovies } from "../services/movie.service";
import { useLocation, useParams } from "react-router-dom";

export const useSearch = (page) => {
    const [results, setResults] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { query } = useParams();
    const location = useLocation();    

    useEffect(() => {
        const getSearchData = async () => {

            // 1. Validation
            const validation = validateSearch(query);
            if (!validation.isValid) {
                setError(validation.message);
                setResults([]);
                return;
            }

            // 2. API Call
            try {
                setError(null);
                setLoading(true);

                const response = await searchMovies(query, page);
                setResults((prev) => (page === 1 ? response.results : [...prev, ...response.results]));
                setSearchItem(location?.state?.searchItem);

                if (response.results?.length === 0) {
                    setError("No movies found matching your search.");
                }

            } catch (err) {
                setError("Something went wrong while fetching data. Please try again.");
                console.error("Search API Error:", err);
            } finally {
                setLoading(false);
            }
        };

        getSearchData();
    }, [query, page]);

    return { results, searchItem, loading, error };
};
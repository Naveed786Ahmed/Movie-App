import React, { useState } from 'react'
import Header from '../components/Header'
import { useSearch } from '../hooks/useSearch'

const SearchResultsPage = () => {

    const [page, setPage] = useState(1);
    const { results, searchItem, loading, error } = useSearch(page);
    console.log(results);
    console.log(searchItem);
    console.log(error);

    return (
        <>
            <Header />
        </>
    )
}

export default SearchResultsPage
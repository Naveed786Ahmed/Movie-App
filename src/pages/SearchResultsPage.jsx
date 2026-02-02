import React from 'react'
import Header from '../components/Header'
import { useSearch } from '../hooks/useSearch'
import SimilarCard from '../components/SimilarCard';
import Footer from '../components/Footer';
import Loader from '../components/Loader.jsx';
import ErrorComponent from '../components/ErrorComponent.jsx';

const SearchResultsPage = () => {

    const { results, searchItem, loading, error } = useSearch();

    return (
        <>
            <Header />
            {loading ? (
                <Loader />

            )
                : error ? (<ErrorComponent error={error}/>)
                :
                (
                    <>
                        <div className='w-full min-h-screen p-4 pb-8 sm:px-12 pt-26 sm:pt-26 bg-gray-950'>
                            <h2 className='text-white text-center sm:text-start text-xl sm:text-2xl font-semibold sm:mb-4'>Search Result for: {searchItem}</h2>
                            <div className='w-full p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:mb-2'>
                                {results?.map((item) => (
                                    item.poster_path && <SimilarCard key={item.id} item={item} />
                                ))
                                }
                            </div>
                        </div>
                    </>
                )
            }
            <Footer />
        </>
    )
}

export default SearchResultsPage
import React, { useState } from 'react'
import Header from '../components/Header'
import { useGenres } from '../hooks/useGenres.js'
import SimilarCard from '../components/SimilarCard.jsx';
import Footer from '../components/Footer.jsx';
import Loader from '../components/Loader.jsx';

const GenresPage = () => {

    const [page, setPage] = useState(1);
    const { genres, genreName, loading } = useGenres(page);

    return (
        <>
            <Header />
            {loading ?
                <Loader />
                :
                <div className='w-full min-h-screen p-4 pb-8 sm:px-12 pt-26 sm:pt-26 bg-gray-950'>
                    <h2 className='text-white text-center sm:text-start text-xl sm:text-3xl font-semibold sm:mb-4'>Genre: {genreName}</h2>
                    <div className='w-full p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:mb-2'>
                        {genres?.map((item) => (
                            item?.poster_path && <SimilarCard key={item.id} item={item} />
                        ))
                        }
                    </div>
                    <div className='w-full p-4 py-3 bg-gray-900/50'>
                        <p onClick={() => setPage(page + 1)} className='text-blue-500 text-sm sm:text-base text-center font-semibold cursor-pointer transition-all duration-300 active:scale-95'>Load More</p>
                    </div>
                </div>
            }
            <Footer />
        </>
    )
}

export default GenresPage
import React, { useState } from 'react'
import { useMovies } from '../hooks/useMovies.js';
import { useNavigate } from 'react-router-dom';

const GenresSection = () => {

    const { movies } = useMovies("genres");
    const navigate = useNavigate();

    return (
        <>
            <div className='w-full bg-gray-900 flex items-center gap-3 overflow-x-auto p-4 scrollbar-hide mb-4 sm:mb-8'>

                {
                    movies?.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => navigate(`/allGenres/${item.id}`, { state: { genreName: item.name } })}
                            className={`
                              px-4 py-2 text-sm font-medium shrink-0 rounded-full bg-gray-800/40 border border-gray-700/50 text-gray-400 hover:bg-red-600 hover:border-red-600 hover:text-white shadow-lg active:scale-95 cursor-pointer transition-all duration-300
                            `}>
                            {item?.name}
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default GenresSection
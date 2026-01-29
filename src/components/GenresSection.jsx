import React, { useState } from 'react'
import { useMovies } from '../hooks/useMovies.js';

const GenresSection = () => {

    const { movies } = useMovies("genres");

    return (
        <>
            <div className='w-full bg-gray-900 flex items-center gap-3 overflow-x-auto p-4 scrollbar-hide'>

                {
                    movies?.map((item) => (
                        <div
                            key={item.id}
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
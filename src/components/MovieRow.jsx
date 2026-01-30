import React from 'react'
import Card from './Card.jsx'
import { useMovies } from '../hooks/useMovies.js'

const MovieRow = ({type, title, emoji}) => {

    const { movies } = useMovies(type);

    return (
        <>
            <h2 className='w-full px-4 p sm:px-6 bg-gray-950/90 text-white text-xl sm:text-3xl font-serif'>{title} {emoji}</h2>
            <div className='w-full p-4 sm:px-6 pb-4 sm:pb-8 bg-gray-950/90 flex items-center gap-3 overflow-x-auto scrollbar-hide'>
                {
                    movies?.map((item) => (
                        <Card key={item.id} item={item}/>
                    ))
                }
            </div>
        </>
    )
}

export default MovieRow
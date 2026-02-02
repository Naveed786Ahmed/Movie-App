import React from 'react'
import { IMAGE_BASE_URL } from '../constant/config.js'

const Poster = ({ movieData }) => {

    const title = movieData?.title ? movieData?.title : movieData?.name


    return (
        <>
            <div className='relative w-full h-[70vh] md:h-[80vh] mb-4'>
                <img src={`${IMAGE_BASE_URL}${movieData?.backdrop_path}`} alt={movieData?.title} className='w-full h-full object-cover opacity-90' />
                <p className='absolute bottom-8 left-5 md:bottom-12 md:left-12 text-xl sm:text-5xl text-white font-bold uppercase'>{title}</p>
            </div>
        </>
    )
}

export default Poster
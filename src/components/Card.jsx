import React from 'react'
import { IMAGE_BASE_URL } from '../constant/config.js';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {

    const navigate = useNavigate();
    
    return (
        <>
            <div onClick={() => navigate(`/movieDetailed/${item.id}`)} className='relative shrink-0 w-24 h-32 sm:w-40 sm:h-48 bg-gray-900 overflow-hidden cursor-pointer rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                <img src={`${IMAGE_BASE_URL}${item.backdrop_path}`} alt="" className='w-full h-full object-cover opacity-90' />
                <p className='absolute flex items-center justify-center bottom-4 p-2 w-full text-white font-serif font-bold text-xs sm:text-sm text-center drop-shadow-lg'>{item?.title ? item.title.toUpperCase().slice(0,12) : item.name.toUpperCase().slice(0,12)}</p>
            </div>
        </>
    )
}

export default Card
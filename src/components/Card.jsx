import React from 'react'
import { IMAGE_BASE_URL } from '../constant/config.js';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {

    const navigate = useNavigate();

    const onChange = () => {
        if (item.first_air_date) {
            navigate(`/tvShowsDetailed/${item.id}`);
        } else {
            navigate(`/movieDetailed/${item.id}`);
        }
    }

    return (
        <>
            <div onClick={() => onChange()} className='shrink-0 w-24 h-32 sm:w-40 sm:h-48 bg-gray-900 overflow-hidden cursor-pointer rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl'>
                <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt="" className='w-full h-full object-cover opacity-90' />
            </div>
        </>
    )
}

export default Card
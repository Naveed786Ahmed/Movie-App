import React from 'react'
import { IMAGE_BASE_URL } from '../constant/config.js'
import { useNavigate } from 'react-router-dom'

const SimilarCard = ({ item }) => {

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
            <div onClick={() => onChange()} className='w-30 h-36 sm:w-40 sm:h-48 bg-gray-900 rounded-xl shrink-0 overflow-hidden cursor-pointer hover:scale-105 mb-2'>
                <img src={`${IMAGE_BASE_URL}${item?.poster_path}`} alt={item?.title} className='w-full h-full object-cover' />
            </div>
        </>
    )
}

export default SimilarCard
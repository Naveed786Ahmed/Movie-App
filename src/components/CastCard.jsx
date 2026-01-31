import React from 'react'
import { IMAGE_BASE_URL } from '../constant/config.js'

const CastCard = ({ item }) => {
    return (
        <>
            <div className='shrink-0 w-20 h-28 sm:w-32 sm:h-40 flex bg-gray-900 overflow-hidden rounded transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer'>
                <img src={`${IMAGE_BASE_URL}${item?.profile_path}`} alt={item?.name} className='w-full h-full object-center' />
            </div>
        </>
    )
}

export default CastCard
import React from 'react'
import CastCard from './CastCard.jsx'

const TopCast = ({ movieCast }) => {
    return (
        <>
            <div className='w-full mb-5'>
                <p className='text-white text-lg sm:text-xl font-bold mb-4'>Top Casts</p>
                <div className='w-full flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide'>
                    {movieCast?.cast?.slice(0,10).map((item) => (
                        <CastCard key={item.id} item={item} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default TopCast
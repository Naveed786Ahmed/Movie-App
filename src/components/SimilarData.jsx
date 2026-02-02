import React from 'react'
import SimilarCard from './SimilarCard'

const SimilarData = ({ similarMovie }) => {

    const similarData = similarMovie?.results ? similarMovie?.results : similarMovie

    return (
        <>
            <div className='w-full p-4 sm:px-12'>
                <p className='text-white font-bold text-xl sm:text-3xl'>You Might Also Like</p>
                <div className='w-full py-4 flex gap-3 overflow-x-auto scrollbar-hide'>
                    {similarData?.map((item) => (
                        item?.poster_path && <SimilarCard key={item.id} item={item} />
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default SimilarData
import React from 'react'
import { formatRuntime } from '../utils/formatTime.js';
import TopCast from './TopCast.jsx';
import { Play } from 'lucide-react';
import { STRING } from '../constant/strings.js';

const DetailBody = ({ movieData, movieCast }) => {

    const languages = movieData?.spoken_languages;
    const releasedDate = movieData?.release_date.split("-")[0];
    const genre = movieData?.genres;
    const rating = movieData?.vote_average.toFixed(1);

    return (
        <>
            <div className='w-full px-4 py-2 sm:p-4 sm:px-12'>
                <p className='text-yellow-400 text-lg sm:text-2xl font-bold mb-2'>{STRING.RATING}: ⭐{rating}<span className='text-gray-400/80 text-sm sm:text-xl font-medium'> /10</span></p>
                <p className='text-gray-400/80 text-sm sm:text-base font-medium mb-2'>{releasedDate} {genre?.map((item) => <span key={item.id}>{`| ${item.name} `}</span>)}</p>
                <p className='text-gray-300/70 text-sm sm:text-base mb-2'><span className='font-semibold'>{STRING.DURATION}: </span>{formatRuntime(movieData?.runtime)}</p>
                <p className='text-gray-400/80 text-sm sm:text-base font-medium mb-2 sm:mb-4'><span className='font-semibold'>{STRING.SPOKEN_LANGUAGE}: </span>{languages?.map((item) => <span key={item.name}>| {item?.english_name} </span>)}</p>
                <p className='text-gray-300/80 text-xs sm:text-sm sm:font-medium text-justify mb-4'>{movieData?.overview}</p>
                <TopCast movieCast={movieCast} />
                <button className='px-4 py-2 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 active:scale-95 rounded-xl text-white text-sm sm:text-base font-bold cursor-pointer transition-all duration-200 ease-in-out shadow-lg shadow-amber-500/30 mb-4'>
                    <Play size={16}/> <span>{STRING.TRAILER_BUTTON}</span>
                </button>
            </div>
        </>
    )
}

export default DetailBody
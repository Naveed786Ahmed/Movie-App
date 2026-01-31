import React from 'react'
import Header from "../components/Header.jsx"
import Poster from '../components/Poster.jsx'
import { movieDetailed } from '../hooks/movieDetailed.js'
import DetailBody from '../components/DetailBody.jsx'
import SimilarData from '../components/SimilarData.jsx'

const MovieDetailedPage = () => {

    const {movieData, loading, movieCast} = movieDetailed();    

    return (
        <>
            <Header />
            <div className='w-full min-h-screen bg-gray-950'>
                <Poster movieData={movieData}/>
                <DetailBody movieData={movieData} movieCast={movieCast}/>
                <SimilarData />
            </div>
        </>
    )
}

export default MovieDetailedPage
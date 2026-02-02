import React from 'react'
import Header from "../components/Header.jsx"
import Poster from '../components/Poster.jsx'
import { useDetailed } from '../hooks/useDetailed.js'
import DetailBody from '../components/DetailBody.jsx'
import SimilarData from '../components/SimilarData.jsx'
import Footer from '../components/Footer.jsx'
import Loader from '../components/Loader.jsx'

const MovieDetailedPage = () => {

    const { movieData, loading, movieCast, similarMovie } = useDetailed();

    return (
        <>
            <Header />
            {loading ?
                <Loader />
                :
                <div className='w-full min-h-screen bg-gray-950'>
                    <Poster movieData={movieData} />
                    <DetailBody movieData={movieData} movieCast={movieCast} />
                    {similarMovie.length !== 0 && <SimilarData similarMovie={similarMovie} />}
                    <Footer />
                </div>

            }
        </>
    )
}

export default MovieDetailedPage
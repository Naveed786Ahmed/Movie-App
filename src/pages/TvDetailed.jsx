import React from 'react'
import Header from '../components/Header'
import Poster from '../components/Poster'
import DetailBody from '../components/DetailBody'
import SimilarData from '../components/SimilarData'
import Footer from '../components/Footer'
import { useTVDetailed } from '../hooks/useTVDetailed'
import Loader from '../components/Loader'

const TVDetailed = () => {

    const { tvShows, similartvShows, tvShowCast, loading } = useTVDetailed();
    console.log(similartvShows);

    return (
        <>
            <Header />
            {loading ?
                <Loader />
                :
                <div className='w-full min-h-screen bg-gray-950'>
                    <Poster movieData={tvShows} />
                    <DetailBody movieData={tvShows} movieCast={tvShowCast} />
                    <SimilarData similarMovie={similartvShows} />
                    <Footer />
                </div>
            }

        </>
    )
}

export default TVDetailed
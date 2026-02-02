import React from 'react'
import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import GenresSection from '../components/GenresSection.jsx'
import MovieRow from '../components/MovieRow.jsx'
import { STRING } from '../constant/strings.js'
import Footer from '../components/Footer.jsx'

const HomePage = () => {
    return (
        <>
            <div className='min-h-screen bg-gray-950'>
                <Header />
                <HeroSection />
                <GenresSection />
                <MovieRow type="trending" title={STRING.TRENDING_MOVIES} emoji="😎" />
                <MovieRow type="popular" title={STRING.POPULAR_MOVIES} emoji="🌟" />
                <MovieRow type="topRated" title={STRING.TOP_RATED} emoji="🏆" />
                <MovieRow type="upcoming" title={STRING.UPCOMING} emoji="⏳" />
                <MovieRow type="nowPLaying" title={STRING.NOW_PLAYING} emoji="🎬" />
                <MovieRow type="tvShows" title={STRING.TV_SHOWS} emoji="📺" />
                <Footer />
            </div>
        </>
    )
}

export default HomePage
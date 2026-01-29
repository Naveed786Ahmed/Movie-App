import React from 'react'
import Header from '../components/Header.jsx'
import HeroSection from '../components/HeroSection.jsx'
import GenresSection from '../components/GenresSection.jsx'

const HomePage = () => {
    return (
        <> 
            <div className='min-h-screen bg-gray-700'>
                <Header />
                <HeroSection />
                <GenresSection />
            </div>
        </>
    )
}

export default HomePage
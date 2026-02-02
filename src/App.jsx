import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MovieDetailedPage from './pages/MovieDetailedPage.jsx'
import TVDetailed from './pages/TvDetailed.jsx'
import GenresPage from './pages/GenresPage.jsx'
import SearchResultsPage from './pages/SearchResultsPage.jsx'

const App = () => {

  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/movieDetailed/:id' element={<MovieDetailedPage />}/>
            <Route path='/tvShowsDetailed/:id' element={<TVDetailed />}/>
            <Route path='/allGenres/:id' element={<GenresPage />}/>
            <Route path='/searchResult/:query' element={<SearchResultsPage />}/>
        </Routes>
    </>
  )
}

export default App
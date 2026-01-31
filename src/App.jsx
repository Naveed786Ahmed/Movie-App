import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MovieDetailedPage from './pages/MovieDetailedPage.jsx'

const App = () => {

  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/movieDetailed/:id' element={<MovieDetailedPage />}/>
        </Routes>
    </>
  )
}

export default App
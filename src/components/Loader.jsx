import React from 'react'
import Spinner from "../assets/Spinner.svg"

const Loader = () => {
  return (
    <>
      <div className='w-full min-h-screen bg-gray-900 flex items-center justify-center'>
          <img src={Spinner} alt="Loading" className='w-1/2 sm:w-1/6'/>
      </div>
    </>
  )
}

export default Loader
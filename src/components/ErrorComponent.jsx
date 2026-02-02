import React from 'react'

const ErrorComponent = ({ error }) => {
    return (
        <>
            <div className='w-full min-h-screen bg-gray-900 flex flex-col gap-2 items-center justify-center'>
                <p className='text-gray-300 font-medium sm:font-semibold text-lg sm:text-2xl'>Opps!</p>
                <p className='text-gray-300/80 font-normal text-sm sm:text-lg text-center'>{error}</p>
            </div>
        </>
    )
}

export default ErrorComponent
import React, { useState } from 'react'
import { STRING } from '../constant/strings';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className='w-full fixed top-0 left-0 z-50 bg-gray-900 flex flex-col items-center justify-center sm:flex-row sm:gap-3 sm:py-2 sm:px-12 shadow-lg shadow-gray-900/30'>
                <div className='w-full sm:w-auto font-medium cursor-pointer' onClick={() => navigate("/")}>
                    <p className='flex items-center justify-center text-white text-2xl sm:text-3xl'>Movie<span className='text-amber-400'>App</span></p>
                </div>
                <div className='w-full flex items-center justify-center gap-2 sm:flex-1 p-2 md:pr-14'>
                    <div className='w-full max-w-lg flex-1'>
                        <input type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={STRING.SEARCH_PLACEHOLDER}
                            className='w-full p-2 pl-4 border border-gray-400 outline-none bg-gray-600/50 backdrop-blur-md placeholder-gray-400 focus:outline-none rounded-xl shadow-xl text-sm sm:text-base text-white/80'
                        />
                    </div>
                    <div className='w-auto'>
                        <button className='py-2 px-4 sm:px-6 bg-amber-500 hover:bg-amber-600 active:scale-95 rounded-xl text-white text-base font-bold cursor-pointer transition-all duration-200 ease-in-out shadow-lg shadow-amber-500/30'>
                            {STRING.SEARCH_BUTTON}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
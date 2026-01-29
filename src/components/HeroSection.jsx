import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useMovies } from '../hooks/useMovies';
import { IMAGE_BASE_URL } from '../constant/config';

const HeroSection = () => {

    const { movies } = useMovies("trending");

    return (
        <>
            <div className='w-full h-[70vh] md:h-[80vh]'>
                <Swiper
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false, // User touch kare tab bhi auto chalta rahe
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true, // Dots chote-bare hote hain (cool lagta hai)
                    }}
                    modules={[Pagination, Autoplay]}
                    className="w-full h-full"
                >

                    {
                        movies?.slice(0, 5).map((item) => (
                            <SwiperSlide key={item.id} className='relative'>
                                <img src={`${IMAGE_BASE_URL}${item.backdrop_path}`} alt={item?.title} className='w-full h-full object-cover' />
                                <p className='text-white text-2xl font-bold sm:text-5xl absolute bottom-10 left-6 md:left-12 drop-shadow-lg'>{item?.title.toUpperCase()}</p>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </>
    )
}

export default HeroSection
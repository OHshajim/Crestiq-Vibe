import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import './Banner.css'
const Header = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation={true}
      speed={1600}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className='h-screen slide1 ' >

          <div className='  animate__animated  animate__fadeInUp flex flex-col justify-center max-w-[1500px] mx-auto px-20 h-full' >
            <h1 className='text-3xl md:text-5xl font-bold'>Crestiq Vibe</h1>
            <p className='font-bold text-[#d0e7e6ed]'>Welcome to Crestiq Vibe: Your Gateway to Extraordinary Escapes</p>
          </div>

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen slide2 ' >

          <div className=' animate__animated  animate__fadeInDown  flex justify-center flex-col h-full max-w-[1500px] mx-auto px-20' >
            <h1 className='text-3xl md:text-5xl font-bold'>Crestiq Vibe</h1>
            <p className='font-bold text-[#d0e7e6ed]'>Welcome to Crestiq Vibe – your gateway to unparalleled hospitality.</p>
          </div>

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen slide3 ' >

          <div className='animate__animated  animate__fadeInLeft  flex flex-col justify-center  h-full max-w-[1500px] mx-auto px-20'>
            <h1 className='text-3xl md:text-5xl font-bold'>Crestiq Vibe</h1>
            <p className='font-bold text-[#d0e7e6ed]'>Embrace the art of hospitality redefined with Crestiq Vibe</p>
          </div>

        </div>

      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
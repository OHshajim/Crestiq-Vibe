import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/scrollbar';
import './Banner.css'
const Header = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
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
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='h-screen slide1 ' >

          <div className='flex justify-center items-center h-full'>
            <h1 className='text-4xl '>Dreams becomes true</h1>
          </div>

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen slide2 ' >

          <div className='flex justify-center items-center h-full'>
            <h1 className='text-4xl '>Dreams becomes true</h1>
          </div>

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen slide3 ' >

          <div className='flex justify-center items-center h-full'>
            <h1 className='text-4xl '>Dreams becomes true</h1>
          </div>

        </div>

      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
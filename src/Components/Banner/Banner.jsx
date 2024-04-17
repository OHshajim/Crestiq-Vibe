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
      modules={[Navigation, Pagination, Scrollbar,Autoplay]}
      // autoplay={{
      //   delay: 2000,
      //   disableOnInteraction: false,
      // }}
      slidesPerView={1}
      navigation={true}
      speed={1600}
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className='h-screen slide1 ' >

          <div className='flex flex-col justify-center max-w-[1500px] mx-auto px-20 h-full' data-aos="fade-left">
            <h1 >Crestiq Vibe</h1>
            <h3 >Welcome to Crestiq Vibe: Your Gateway to Extraordinary Escapes</h3>
          </div>

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen slide2 ' >

          <div className='flex justify-center flex-col h-full max-w-[1500px] mx-auto px-20' data-aos="fade-left">
            <h1 >Crestiq Vibe</h1>
            <h3>Welcome to Crestiq Vibe – your gateway to unparalleled hospitality.</h3>
          </div>

        </div>

      </SwiperSlide>
      <SwiperSlide>
        <div className='h-screen slide3 ' >

          <div className='flex flex-col justify-center  h-full max-w-[1500px] mx-auto px-20' data-aos="fade-left">
            <h1>Crestiq Vibe</h1>
            <h3>Embrace the art of hospitality redefined with Crestiq Vibe</h3>
          </div>

        </div>

      </SwiperSlide>
    </Swiper>
  );
};

export default Header;
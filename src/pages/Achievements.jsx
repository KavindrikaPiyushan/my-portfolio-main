import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import custom CSS for animations
import '../style/Achievements.css';

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import A from '../assets/achievements/a.jpg';
import B from '../assets/achievements/b.jpg';
import C from '../assets/achievements/c.jpg';
import D from '../assets/achievements/d.jpg';
import E from '../assets/achievements/e.jpg';
import F from '../assets/achievements/f.jpg';
import G from '../assets/achievements/g.jpg';
import H from '../assets/achievements/h.jpg';
import I from '../assets/achievements/i.jpg';
import J from '../assets/achievements/j.jpg';
import K from '../assets/achievements/k.jpeg';
import L from '../assets/achievements/l.jpeg';
import M from '../assets/achievements/m.jpeg';

const images = [
  A, B, C, D, E, F, G, H, I, J, K, L, M
];

function Achievements() {
  return (
    <div className="container">
      <h1 className="heading">Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}        
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,  // Increased rotation for a more 3D effect
          stretch: 0,  // Adjusts the spacing between slides
          depth: 300,  // Increased depth to make it more 3D
          modifier: 1, // Modifier for the 3D effect intensity
          slideShadows: true,  // Add shadows for a 3D feel
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='slide'>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Achievements;

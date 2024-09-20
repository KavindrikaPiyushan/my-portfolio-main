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
import I from '../assets/achievements/i.jpeg';
import J from '../assets/achievements/j.jpg';
import K from '../assets/achievements/k.jpeg';
import L from '../assets/achievements/l.jpeg';
import M from '../assets/achievements/m.jpeg';
import N from '../assets/achievements/n.jpeg';
import O from '../assets/achievements/o.jpeg';
import P from '../assets/achievements/p.jpg';
import Q from '../assets/achievements/q.jpg';
import R from '../assets/achievements/r.jpg';
import S from '../assets/achievements/s.jpg';
import T from '../assets/achievements/t.jpeg';
import U from '../assets/achievements/u.jpeg';
import V from '../assets/achievements/v.jpeg';
import W from '../assets/achievements/w.jpeg';
import X from '../assets/achievements/x.jpeg';
import Y from '../assets/achievements/y.jpg';
import Z from '../assets/achievements/z.jpg';
import A1 from '../assets/achievements/a1.jpeg';
import B1 from '../assets/achievements/b1.jpg';
import C1 from '../assets/achievements/c1.jpg';
import D1 from '../assets/achievements/d1.jpeg';
import E1 from '../assets/achievements/e1.jpeg';
import F1 from '../assets/achievements/f1.jpeg';
import G1 from '../assets/achievements/g1.jpg';
import H1 from '../assets/achievements/h1.jpg';


const images = [
  G,L,A,J,   H,S,F,Q,T,W, D,B,F1,B1, C,G, E,    K, M, N,C1, O,  U, R,I,Y,P,    V,  X,  Z, A1, C1, D1, E1, F1, G1, H1
];

function Achievements() {
  return (
    <div className="container px-0 ">
    <h1 className="section-title ">Myself</h1>
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
        className="swiper_container  "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='slide'>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="slider-controler ">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination hidden"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Achievements;

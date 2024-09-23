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

const   B = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/b.webp?alt=media&token=e4dfab4a-387a-4187-8775-2f415d402809';
const   C = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/c.webp?alt=media&token=30bf180c-5bb5-43bd-b3d8-0a398fcc226b';
const   D = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/d.webp?alt=media&token=a1b22f49-c52c-4dd8-bc3a-4f7bce2f0e52';
const   E = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/e.webp?alt=media&token=58d40a53-3f6a-4eab-a24a-6ac0bc86a588';
const   F = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/f.webp?alt=media&token=295557b6-ac9f-476f-8fb6-e60afa6a07bb';
const   G = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/g.webp?alt=media&token=55c8a0a3-5a1e-4e4c-ab4e-3f141d69512a';
const   H = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/h.webp?alt=media&token=6d3e03a5-d157-49b5-b15c-e208ca45670c';
const   I = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/i.webp?alt=media&token=d8cd0d6e-e77a-4343-b863-a1ff149af9a4';
const   J = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/j.webp?alt=media&token=f9c7ee86-9bb2-4f65-8abe-3657218e8a63';
const   K = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/k.webp?alt=media&token=527ab19b-ad92-4138-bf40-74c2313c9618';
const   L = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/l.webp?alt=media&token=d623771b-f547-4715-b8d2-9174ff005d66';
const   M = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/m.webp?alt=media&token=0e576b6c-5d7f-44d0-94f0-f8793461baf1';
const   N = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/n.webp?alt=media&token=59dba444-9487-4473-ac2b-cf0c867005b4';
const   O = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/o.webp?alt=media&token=fcfb26fb-22da-411a-835a-8c46d7c29063';
const   P = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/p.webp?alt=media&token=766c56c7-1e33-43e1-b04b-594482d71f8e';
const   Q = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/q.webp?alt=media&token=6ecb1776-5bfa-4877-b84d-5a3bd0d907ca';
const   R = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/r.webp?alt=media&token=8deb7f5e-f93c-4f32-8b65-90fb1a947e12';
const   S = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/s.webp?alt=media&token=b7580427-8068-452a-ba24-7c4a402e6fa6';
const   T = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/t.webp?alt=media&token=1e679db7-bb83-439e-a85d-4811daebb7f7';
const U = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/u.webp?alt=media&token=6baffa47-01d7-4880-b874-1b6c0e70229a';
const   V = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/v.webp?alt=media&token=4dc7e1b7-ac72-40f6-8659-0b888d569702';
const   W = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/w.webp?alt=media&token=17b845f4-1bcf-487d-bbb6-058f3b14f875';
const   X = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/x.webp?alt=media&token=ba6e9d73-3815-431e-9883-3b32876de7fa';
const   Y = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/y.webp?alt=media&token=ed6a7107-4a02-4876-b3a6-95f5b35b578c';
const   Z = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/z.webp?alt=media&token=afd96523-ec7b-4b1e-b1bc-c4dc226ba414';
const  A1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/a1.webp?alt=media&token=d6c75abf-92cd-4ca0-8ead-af5477251718';
const  B1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/b1.webp?alt=media&token=f13e063a-5035-499e-93af-5739e21300a1';
const  C1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/c1.webp?alt=media&token=c811a54a-0ec5-4132-9a89-5cd815a2fe0f';
const  D1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/d1.webp?alt=media&token=ce24c4e9-1d2e-4ad7-aebb-de5c7c89827b';
const  E1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/e1.webp?alt=media&token=84f2299c-311e-42a5-b1d9-ead9ef13c9b8';
const  F1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/f1.webp?alt=media&token=771514fc-a6ea-4e39-9d9c-e7674f226525';
const  G1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/g1.webp?alt=media&token=5264ed45-62e4-4c72-9fdc-f449c67622dc';
const  H1 = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/h1.webp?alt=media&token=f346c1e7-e323-493b-8c04-c416b6cbc0a4';
const A = 'https://firebasestorage.googleapis.com/v0/b/portofolio-ee5de.appspot.com/o/a.webp?alt=media&token=341e1581-4d22-40be-bce5-ab8c013e8081';
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

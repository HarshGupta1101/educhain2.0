import React, { useState } from 'react';
import HeroSlider from 'react-slick';
// import axios from "axios";

//Arrow components
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = useState([
    'https://res.cloudinary.com/diczskxkx/image/upload/v1681403478/ds_do2sy2.jpg',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1681379408/MicrosoftTeams-image_3_wnp1bl.png',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1681403479/bc_shvsah.png',
  ]);

  const settingsLG = {
    arrows: true,
    autoplay: true,
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    infinite: true,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slideToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {images.map((image, index) => (
            <div className='w-full h-58 md:h-80 pt-3' key={index}>
              <img
                src={image}
                alt='Hero Banner'
                className='w-full h-full rounded-md object-center '
              />
            </div>
          ))}
        </HeroSlider>
      </div>
      <div className='hidden lg:block'>
        <HeroSlider {...settingsLG}>
          {images.map((image, index) => (
            <div className='w-full h-96 px-2 pt-3' key={index}>
              <img
                src={image}
                alt='Hero Banner'
                className='w-full h-full rounded-md object-center '
              />
            </div>
          ))}
        </HeroSlider>
      </div>
    </>
  );
};

export default HeroCarousel;

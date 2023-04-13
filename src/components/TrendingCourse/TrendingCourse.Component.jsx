import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component';

const TrendingCourse = (props) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          InitialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const { posters, title, subtitle } = props;

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 ml-0 mb-6'>
        <h3 className='text-3xl font-bold text-black'>{title}</h3>
        <p className='text-sm text-gray-800'>{subtitle}</p>
      </div>
      <Slider {...settings}>
        {posters.map((each) => (
          <Poster {...each} />
        ))}
        {console.log(posters)}
      </Slider>
    </>
  );
};

export default TrendingCourse;

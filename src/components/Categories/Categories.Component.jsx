import React from 'react';
import Slider from 'react-slick';

const Categories = (props) => {
  return (
    <>
      <div
        className='p-8 rounded-lg text-center bg-sky-100'
        style={{ marginRight: '20px' }}
      >
        <img className='w-full h-full mb-3' src={props.src} alt='categories' />
        <p>Web Development</p>
      </div>
    </>
  );
};

const CategoriesSlider = () => {
  const EntertainmentImage = [
    'https://res.cloudinary.com/diczskxkx/image/upload/v1676156532/sxakrrgpsrusrm3byqcl.png',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1676155812/f2f6aeuqdozg2tmt4nhn.png',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1676155278/v2b85fvgnwtvrffqd51l.png',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1676149531/vswei49nchiccunlapgq.png',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1681381223/MicrosoftTeams-image_4_vdw9pu.png',
    'https://res.cloudinary.com/diczskxkx/image/upload/v1681381223/MicrosoftTeams-image_5_iw3nk4.png',
  ];

  const settings = {
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    InitialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {EntertainmentImage.map((image, index) => (
          <Categories src={image} key={index} />
        ))}
      </Slider>
    </>
  );
};

export default CategoriesSlider;

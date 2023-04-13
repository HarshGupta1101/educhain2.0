import React, { useState } from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import CategoriesSlider from '../components/Categories/Categories.Component';
import TrendingCourse from '../components/TrendingCourse/TrendingCourse.Component';
import Footer from '../components/Footer/Footer.Component'

function HomePage() {
  const [topCourses, setTopCourses] = useState([
    {
      image:
        'https://res.cloudinary.com/diczskxkx/image/upload/v1676155679/azn1ngpqwcn5ounqm9ef.jpg',
      title: 'Learn Python: The Complete Python Programming Course',
      instructor: 'Ritik Jain',
      coursePrice: '10',
    },
    {
      image:
        'https://res.cloudinary.com/diczskxkx/image/upload/v1676152970/ileldz1zu8nka3xdjpgo.jpg',
      title: 'Learn Python: The Complete Python Programming Course',
      instructor: 'Ritik Jain',
      coursePrice: '10',
    },
    {
      image:
        'https://res.cloudinary.com/diczskxkx/image/upload/v1676155679/azn1ngpqwcn5ounqm9ef.jpg',
      title: 'Learn Python: The Complete Python Programming Course',
      instructor: 'Ritik Jain',
      coursePrice: '10',
    },
    {
      image:
        'https://res.cloudinary.com/diczskxkx/image/upload/v1674463149/samples/animals/kitten-playing.gif',
      title: 'Learn Python: The Complete Python Programming Course',
      instructor: 'Ritik Jain',
      coursePrice: '10',
    },
    {
      image:
        'https://res.cloudinary.com/diczskxkx/image/upload/v1676152970/ileldz1zu8nka3xdjpgo.jpg',
      title: 'Learn Python: The Complete Python Programming Course',
      instructor: 'Ritik Jain',
      coursePrice: '10',
    },
    {
      image:
        'https://res.cloudinary.com/diczskxkx/image/upload/v1676155633/oqu9tyknlcytgjvrlrid.jpg',
      title: 'Learn Python: The Complete Python Programming Course',
      instructor: 'Ritik Jain',
      coursePrice: '10',
    },
  ]);

  return (
    <>
      <HeroCarousel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-3xl font-bold text-gray-800 sm:ml-3 ml-0 mb-6'>
          Top Categories
        </h1>
        <CategoriesSlider />
      </div>
      <div className='container mx-auto px-4 md:px-12 mt-8 mb-12'>
        <TrendingCourse
          title='Trending Courses'
          subtitle='List of recommended courses'
          posters={topCourses}
        />
      </div>
      <div className='bg-premier-800 py-12'>
        <Footer/>
      </div>
    </>
  );
}

export default HomePage;

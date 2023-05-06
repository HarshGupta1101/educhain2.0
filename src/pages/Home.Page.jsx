import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component';
import CategoriesSlider from '../components/Categories/Categories.Component';
import TrendingCourse from '../components/TrendingCourse/TrendingCourse.Component';
import About from '../components/About/About.Component';
import NGOReg from '../components/NGORegistration/NGORegBanner.Component';
import { useState, useEffect } from 'react';
// import courses from '../utils/data';

function HomePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await fetch(`http://127.0.0.1:5000/course`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // handle successful response
          if (!data.status) {
            throw new Error(data.message);
          }
          let courseData = [];
          for (let i = 0; i < 5; i++) {
            courseData.push(data.courses[i]);
          }
          setCourses(courseData);
        })
        .catch((error) => {
          // handle error response
        });
    };
    getData();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <h2 className='text-3xl font-bold text-gray-800 sm:ml-3 ml-0 mb-6'>
          Top Categories
        </h2>
        <CategoriesSlider />
      </div>
      <div className='container mx-auto px-4 md:px-12 mt-8 mb-12'>
        <TrendingCourse
          title='Trending Courses'
          subtitle='List Of Recommended Courses'
          posters={courses}
        />
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <About />
      </div>
      <div className='container mx-auto px-4 md:px-12 my-8'>
        <NGOReg />
      </div>
    </>
  );
}

export default HomePage;

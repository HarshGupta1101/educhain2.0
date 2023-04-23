import React from 'react';
import { useCartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';

const CourseInfo = ({ courseData }) => {
  const { addToCart } = useCartContext();
  return (
    <>
      <div className='flex flex-col gap-8'>
        <h1 className='text-white text-5xl font-bold'>
          {courseData.courseTitle}
        </h1>
        <div className='flex flex-col gap-5 text-white'>
          <h4>Tags - {courseData.tags.join(',')}</h4>
          <h4>Language - {courseData.language}</h4>
          <h4>Duration - {courseData.timeRequired}</h4>
        </div>
        <div className='flex items-center w-full'>
          <Link
            to='/cart'
            className='bg-orange-500 hover:bg-orange-600 p-3 text-white font-semibold rounded-lg'
            onClick={() =>
              addToCart(
                courseData._id,
                courseData.image,
                courseData.courseTitle,
                courseData.courseFee,
                courseData.instructorId,
                courseData.courseModules
              )
            }
          >
            Add To Cart
          </Link>
        </div>
      </div>
    </>
  );
};
export default CourseInfo;

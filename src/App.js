import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home.Page';
import DefaultLayout from './layouts/Default.Layout';
import SignIn from './components/SignIn/SignIn.Component';
import SignUp from './components/SignUp/SignUp.Component';
import NGORegistration from './components/NGORegistration/NGORegistration.Component';
import AllCourses from './pages/AllCourses.Page';
import Profile from './pages/Profile.Page';
import InProgressCourses from './pages/InProgressCourses.Page';
import CompletedCourses from './pages/CompletedCourses.Page'
import UploadedCourses from './pages/UploadedCourses.Page'
import Students from './pages/Students.Page';
import SingleCourse from './pages/SingleCourse.Page';
import CoursePlay from './pages/CoursePlay.Page';
import CartPage from './pages/Cart.Page';
import Modal from './components/Modal/Modal.Component';
import UploadCourseDraftPage from './pages/UploadCourseDraft.Page';

// import axios from 'axios';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.params = {};
// axios.defaults.params["api_key"] = "7d6db67791d1fc8dd41512aa8b5be970";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          exact
          element={
            <DefaultLayout>
              <HomePage />
            </DefaultLayout>
          }
        />
        <Route path='/login' exact element={<SignIn />} />
        <Route path='/register' exact element={<SignUp />} />
        <Route path='/ngoregistration' exact element={<NGORegistration />} />
        <Route
          path='/profile'
          exact
          element={
            <DefaultLayout>
              <Profile />
            </DefaultLayout>
          }
        />
        <Route
          path='/inprogresscourses'
          exact
          element={
            <DefaultLayout>
              <InProgressCourses />
            </DefaultLayout>
          }
        />
        <Route
          path='/completedcourses'
          exact
          element={
            <DefaultLayout>
              <CompletedCourses />
            </DefaultLayout>
          }
        />
        <Route
          path='/uploadedcourses'
          exact
          element={
            <DefaultLayout>
              <UploadedCourses />
            </DefaultLayout>
          }
        />
        <Route
          path='/students'
          exact
          element={
            <DefaultLayout>
              <Students />
            </DefaultLayout>
          }
        />
        <Route
          path='/courses'
          exact
          element={
            <DefaultLayout>
              <AllCourses />
            </DefaultLayout>
          }
        />
        <Route
          path='/course/:id'
          exact
          element={
            <DefaultLayout>
              <SingleCourse />
            </DefaultLayout>
          }
        />
        <Route
          path='/course/play/:id'
          exact
          element={
            <DefaultLayout>
              <CoursePlay />
            </DefaultLayout>
          }
        />
        <Route
          path='/cart'
          exact
          element={
            <DefaultLayout>
              <CartPage />
            </DefaultLayout>
          }
        />
        <Route
          path='/modal'
          exact
          element={
            <DefaultLayout>
              <Modal />
            </DefaultLayout>
          }
        />
        <Route
          path='/course/upload/draft'
          exact
          element={
            <DefaultLayout>
              <UploadCourseDraftPage />
            </DefaultLayout>
          }
        />
        <Route
          path='/course/upload/draft/:id'
          exact
          element={
            <DefaultLayout>
              <UploadCourseDraftPage />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

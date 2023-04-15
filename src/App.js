import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home.Page';
import DefaultLayout from './layouts/Default.Layout';
import SignIn from './components/SignIn/SignIn.Component';
import SignUp from './components/SignUp/SignUp.Component';
import NGORegistration from './components/NGORegistration/NGORegistration.Component'
import AllCourses from './pages/AllCourses.Page'
import Dashboard from './pages/Dashboard.Page'
import SingleCourse from './pages/SingleCourse.Page';
import CoursePlayPage from './pages/CoursePlay.Page';
import CartPage from './pages/Cart.Page';
// import axios from 'axios';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          path='/dashboard'
          exact
          element={
            <DefaultLayout>
              <Dashboard />
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
              <CoursePlayPage />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

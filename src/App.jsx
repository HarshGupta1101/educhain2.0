import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home.Page';
import DefaultLayout from './layouts/Default.Layout';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

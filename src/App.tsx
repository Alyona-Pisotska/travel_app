import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import TripDetailsPage from './Pages/TripDetailsPage';
import BookingPage from './Pages/BookingPage';
import Footer from './Components/Footer/Footer';
import { Routes as ROUTES } from './routes';
import { PrivateRoute } from './Components/PrivateRoute/PrivateRoute';
import Toastr from './Components/Toastr/Toastr';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.SignUp.path} element={<SignUp />} />
          <Route path={ROUTES.SignIn.path} element={<SignIn />} />

          <Route path={ROUTES.HomePage.path} element={<PrivateRoute component={HomePage} />} />
          <Route path={ROUTES.TripDetails.path} element={<PrivateRoute component={TripDetailsPage} />} />
          <Route path={ROUTES.Booking.path} element={<PrivateRoute component={BookingPage} />} />
          <Route path="*" element={<PrivateRoute component={HomePage} />} />
        </Routes>
      </main>
      <Footer />
      <Toastr />
    </div>
  );
}

export default App;

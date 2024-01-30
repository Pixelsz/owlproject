import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginSignup from './components/LoginSignup/loginsignup.jsx';
import Countries from './components/restcountries/Countries.jsx';
import Header from './components/restcountries/header.jsx';
import Filter from './components/restcountries/Filter.jsx';
import Country from './components/restcountries/Country.jsx';
import AirlineBookingForm from './components/TicketForm/form.jsx';

const Home = () => (
  <>
    <Header />
    <Filter />
    <Countries />
  </>
);

const CountryPage = () => (
  <>
    <Header />
    <Country />
  </>
);

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path='/Home' element={<Home />} />
        <Route path="/countries/:name" element={<CountryPage />} />
        <Route path="/form" element={<AirlineBookingForm />} />
      </Routes>
    </Router>
  );
}



export default App

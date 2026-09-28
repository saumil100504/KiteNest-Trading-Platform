import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './LandingPage/home/HomePage';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter , Routes ,Route} from "react-router-dom";


import Signup from "./LandingPage/signup/Signup";
import Login from "./LandingPage/login/Login";
import AboutPage from "./LandingPage/about/AboutPage";
import ProductsPage from "./LandingPage/products/ProductsPage";
import PricingPage from "./LandingPage/pricing/PricingPage";
import SupportPage from "./LandingPage/support/SupportPage";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import NotFound from './LandingPage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
  </BrowserRouter>

);

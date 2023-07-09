

import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Home from '../pages/Home';
import Demandpage from '../pages/Demandpage';
import CompanyName  from '../pages/companyName';
import Services from '../pages/Services';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='home'/>}/>
      <Route path='home' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='demand' element={<Demandpage />}/>
      <Route path='companyName' element={<CompanyName />}/>
      <Route path='services' element={<Services />}/>
    </Routes>
  )
}

export default Routers

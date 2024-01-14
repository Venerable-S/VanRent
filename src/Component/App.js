import React from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';

export default function App() {
  return(
    <BrowserRouter>
    <nav className='nav-container'>
      <h1>
        #VANLYF
      </h1>
      <div className="navigation">
        <Link  className="link" to='/'>
          Home
        </Link>
        <Link className="link" to='/about'>
          About
      </Link>
      </div>
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
    </Routes>
    <footer className="foot-container">
      <h3>
        @ 2022 #VANLYF
      </h3>
    </footer>
  </BrowserRouter>
  )
}
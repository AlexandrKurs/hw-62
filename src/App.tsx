import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './containers/home/home';
import About from './containers/about/about';
import Contact from './containers/contacts/contacts';

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
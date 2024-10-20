import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./containers/home/home";
import Contact from "./containers/contacts/contacts";
import Services from "./containers/services/services.tsx";
import Footer from "./components/footer/footer.tsx";
import "./style.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;

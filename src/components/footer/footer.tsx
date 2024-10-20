import React from "react";
import "../../style.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {currentYear} Final Fantasy Company. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

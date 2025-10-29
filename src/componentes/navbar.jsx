import React from 'react';
import './navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Botón para abrir sidebar */}
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Logo */}
        <div className="navbar-logo">
          <span className="logo-text">Chilaquiles</span>
        </div>

        {/* Navegación */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#inicio" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#menu" className="navbar-link">Menú</a>
          </li>
          <li className="navbar-item">
            <a href="#contacto" className="navbar-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
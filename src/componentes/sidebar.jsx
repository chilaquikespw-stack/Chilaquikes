import React, { useState } from 'react';
import './sidebar.css';
import arrowIcon from '../assets/arrow.svg';
import logoImage from '../assets/NAVBA.jpg';
import bannerImage from '../assets/Banner.jpg';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState('intro');

  const menuItems = [
    {
      id: 'intro',
      title: 'Inicio',
      icon: arrowIcon
    },
    {
      id: 'gameplan',
      title: 'Menu',
      icon: arrowIcon
    },
    {
      id: 'contact',
      title: 'Historia',
      icon: arrowIcon
    }
  ];

  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    console.log(`Navegando a: ${itemId}`);
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      {/* Header del sidebar con logo */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      </div>

      {/* Menú de navegación */}
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className="sidebar-item-content">
              <h3 className="sidebar-item-title">{item.title}</h3>
              <div className="sidebar-item-line"></div>
            </div>
            <div className="sidebar-item-icon">
              <img src={item.icon} alt="arrow" className="arrow-icon" />
            </div>
          </div>
        ))}

        {/* Sección especial - Shop */}
        <div className="sidebar-shop">
          <div className="shop-label">Siguenos</div>
          <div className="sidebar-item special">
            <div className="sidebar-item-content">
              <h3 className="sidebar-item-title">Publicidad</h3>
            </div>
            
          </div>
        </div>
      </nav>

      {/* Botones de acción */}
      <div className="sidebar-actions">
        <button className="action-btn primary">
          <span className="btn-icon">⬇</span>
          Cotizar
        </button>
        <button className="action-btn secondary">
          <span className="btn-icon">✓</span>
       Contacto
        </button>
        <p className="sidebar-footer-text">
         
        </p>
      </div>
      <div className="sidebar-footer-image">
        <img src={bannerImage} alt="Banner" className="footer-banner-image" />
      </div>
    </div>
  );
};

export default Sidebar;
import React, { useState } from 'react';
import './navigation.css';
import Logo from '../../assets/logo.png'

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <a href="#" className="logo">
       <img src={Logo} alt="" />
      </a>
      <ul className={`navigation ${isActive ? 'active' : ''}`}>
        <li>
          <a href="#" className="active">Home</a>
        </li>
        <li>
          <a href="#">Produits</a>
        </li>
        <li>
          <a href="#">À propos</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="nav-icons">
        <div className="icon-user">
          <ion-icon name="person"></ion-icon>
        </div>
        <div id="burger-menu" onClick={handleBurgerClick}>
          <ion-icon name="menu-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
}

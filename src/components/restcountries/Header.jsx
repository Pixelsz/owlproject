import React from 'react';
import './Header.css';
import { useTheme } from './ThemeState';

const Header = () => {
  const { isLightTheme, changeTheme } = useTheme();

  return (
    <header className={`header ${isLightTheme ? 'light-theme' : ''}`}>
      <div>
        <h1>Para onde você quer viajar?</h1>
      </div>

      <div>
        <i className={`fas fa-moon ${isLightTheme ? '' : 'dark'}`} onClick={changeTheme}></i>
      </div>
    </header>
  );
};

export default Header;
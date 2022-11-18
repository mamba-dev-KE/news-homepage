import React from 'react';
import { data } from '../../assets/data';
import './NavBar.scss';
import Toggle from './Toggle';

export const NavBar = () => {
  const { useState } = React;

  const [isToggleMenu, setIsToggleMenu] = useState(true);

  return (
    <nav className="navigation container flex justify-between items-center">
      <div className="navigation-logo">
        <img src={data.logo} alt="logo" />
      </div>
      <div className="navigation-list-container">
        <div className="navigation-container">
          <Toggle data={data} isToggleMenu setIsToggleMenu={setIsToggleMenu} />
        </div>
        {isToggleMenu && (
          <ul className="navigation-list">
            {data.menu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

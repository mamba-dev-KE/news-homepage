import React from 'react';
import { data } from '../../assets/data';
import { MenuToggle } from './MenuToggle';
import './NavBar.scss';

export const NavBar = () => {
  const { useState } = React;

  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(true);

  return (
    <header>
      <div className="navigation-wrapper container flex justify-between items-center">
        <div className="logo">
          <img src={data.logo} alt="logo" />
        </div>
        <nav className={!isToggleMenu ? 'display-none' : ''}>
          <ul>
            {data.menu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        <MenuToggle
          data={data}
          isToggleMenu={isToggleMenu}
          setIsToggleMenu={setIsToggleMenu}
        />
      </div>
      {isToggleMenu && <div className="veil" />}
    </header>
  );
};

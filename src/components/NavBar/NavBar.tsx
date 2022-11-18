import React from 'react';
import { data } from '../../assets/data';
import { MenuToggle } from './MenuToggle';
import * as useHooks from 'usehooks-ts';
import './NavBar.scss';

export const NavBar = () => {
  const { useState } = React;
  const { useWindowSize } = useHooks;

  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);
  const { width } = useWindowSize();
  const isMobileWidth = width < 500;

  return (
    <header>
      <div className="navigation-wrapper container flex justify-between items-center">
        <div className="logo">
          <img src={data.logo} alt="logo" />
        </div>
        <nav className={isMobileWidth ? 'nav-mobile display-none' : 'nav'}>
          <ul className={isMobileWidth ? '' : 'flex'}>
            {data.menu.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
        {isMobileWidth && (
          <MenuToggle
            data={data}
            isToggleMenu={isToggleMenu}
            setIsToggleMenu={setIsToggleMenu}
          />
        )}
      </div>
      {isToggleMenu && <div className="veil" />}
    </header>
  );
};

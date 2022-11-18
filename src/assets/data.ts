import logo from '../assets/logo.svg';
import burgerMenuOpen from '../assets/icon-menu.svg';
import burgerMenuClose from '../assets/icon-menu-close.svg';

export interface DataInterface {
  menu: string[];
  logo: string;
  burgerMenuOpen: string;
  burgerMenuClose: string;
}

export const data: DataInterface = {
  menu: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
  logo,
  burgerMenuOpen,
  burgerMenuClose,
};

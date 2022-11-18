import logo from '../assets/logo.svg';
import burgerMenuOpen from '../assets/icon-menu.svg';
import burgerMenuClose from '../assets/icon-menu-close.svg';
import heroImg from '../assets/image-web-3-mobile.jpg';

export interface DataInterface {
  menu: string[];
  logo: string;
  burgerMenuOpen: string;
  burgerMenuClose: string;
  heroImg: string;
  title: string;
}

export const data: DataInterface = {
  menu: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
  logo,
  burgerMenuOpen,
  burgerMenuClose,
  heroImg,
  title: 'The Bright Future of Web 3.0? ',
};

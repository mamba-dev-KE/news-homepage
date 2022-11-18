import logo from '../assets/logo.svg';

export interface DataInterface {
  menu: string[];
  logo: string;
}

export const data: DataInterface = {
  menu: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
  logo,
};

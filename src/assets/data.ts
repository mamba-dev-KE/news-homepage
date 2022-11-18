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
  mainTitle: string;
  heroText: string;
  btnText: string;
  sideBar: {
    top: {
      title: string;
      subtitle: string;
      text: string;
    };
    mid: {
      title: string;
      text: string;
    };
    bottom: {
      title: string;
      text: string;
    };
  };
}

export const data: DataInterface = {
  menu: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
  logo,
  burgerMenuOpen,
  burgerMenuClose,
  heroImg,
  mainTitle: 'The Bright Future of Web 3.0? ',
  heroText:
    'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise? ',
  btnText: 'Read More',
  sideBar: {
    top: {
      title: 'New',
      subtitle: 'Hydrogen VS Electric Cars',
      text: 'Will hydrogen-fueled cars ever catch up to EVs? ',
    },
    mid: {
      title: 'The Downsides of AI Artistry',
      text: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    bottom: {
      title: ' Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  },
};

import logo from '../assets/logo.svg';
import burgerMenuOpen from '../assets/icon-menu.svg';
import burgerMenuClose from '../assets/icon-menu-close.svg';
import heroImgMobile from '../assets/image-web-3-mobile.jpg';
import heroImgDesktop from '../assets/image-web-3-desktop.jpg';
import cardOne from '../assets/image-retro-pcs.jpg';
import cardThree from '../assets/image-gaming-growth.jpg';
import cardTwo from '../assets/image-top-laptops.jpg';

export interface DataInterface {
  menu: string[];
  logo: string;
  burgerMenuOpen: string;
  burgerMenuClose: string;
  heroImg: {
    mobile: string;
    desktop: string;
  };
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
  trending: {
    title: string;
    subtitle: string;
    text: string;
    img: string;
  }[];
}

export const data: DataInterface = {
  menu: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
  logo,
  burgerMenuOpen,
  burgerMenuClose,
  heroImg: {
    mobile: heroImgMobile,
    desktop: heroImgDesktop,
  },
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
      title: 'Is VC Funding Drying Up?',
      text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  },
  trending: [
    {
      title: '01',
      subtitle: 'Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades? ',
      img: cardOne,
    },
    {
      title: '02',
      subtitle: 'Top 10 Laptops of 2022',
      text: 'Our best picks for various needs and budgets.',
      img: cardTwo,
    },
    {
      title: '03',
      subtitle: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.',
      img: cardThree,
    },
  ],
};

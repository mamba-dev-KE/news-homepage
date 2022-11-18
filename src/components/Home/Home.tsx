import { data } from '../../assets/data';
import { Hero } from './Hero';
import { SideBar } from './SideBar';
import './Home.scss';

export const Home = () => {
  const { heroImg, mainTitle, heroText, btnText } = data;
  return (
    <section className="home">
      <div className="container">
        <Hero />
        <SideBar />
      </div>
    </section>
  );
};

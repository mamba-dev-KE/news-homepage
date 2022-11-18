import { Hero } from './Hero';
import { SideBar } from './SideBar';
import { TrendingCards } from './TrendingCards';
import './Home.scss';

export const Home = () => {
  return (
    <section className="home container">
      <Hero />
      <SideBar />
      <TrendingCards />
    </section>
  );
};

import { Hero } from './Hero';
import { SideBar } from './SideBar';
import './Home.scss';

export const Home = () => {
  return (
    <section className="home container">
      <Hero />
      <SideBar />
    </section>
  );
};

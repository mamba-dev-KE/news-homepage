import { data } from '../../assets/data';
import './Home.scss';

export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <article className="hero">
          <img src={data.heroImg} alt="" />
          <h1>{data.title}</h1>
        </article>
      </div>
    </section>
  );
};

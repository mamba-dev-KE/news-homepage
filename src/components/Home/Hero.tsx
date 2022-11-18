import { data } from '../../assets/data';

export const Hero = () => {
  const { heroImg, mainTitle, heroText, btnText } = data;

  return (
    <article className="hero">
      <img src={heroImg} alt="" />
      <h1>{mainTitle}</h1>
      <p>{heroText}</p>
      <button>{btnText}</button>
    </article>
  );
};

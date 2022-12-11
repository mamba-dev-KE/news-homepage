import { useWindowSize } from 'usehooks-ts';
import { data } from 'assets/data';

export const Hero = () => {
  const { width } = useWindowSize();

  const { heroImg, mainTitle, heroText, btnText } = data;
  const isMobileWidth = width < 500;

  return (
    <article className="hero">
      <img src={isMobileWidth ? heroImg.mobile : heroImg.desktop} alt="" />
      <div className="flex">
        <h1>{mainTitle}</h1>
        <div className="hero-text">
          <p>{heroText}</p>
          <button>{btnText}</button>
        </div>
      </div>
    </article>
  );
};

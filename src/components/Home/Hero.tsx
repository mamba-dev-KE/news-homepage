import * as useHooks from 'usehooks-ts';
import { data } from '../../assets/data';

export const Hero = () => {
  const { useWindowSize } = useHooks;
  const { width } = useWindowSize();

  const { heroImg, mainTitle, heroText, btnText } = data;
  const isMobileWidth = width < 500;

  return (
    <article className="hero">
      <img src={isMobileWidth ? heroImg.mobile : heroImg.desktop} alt="" />
      <h1>{mainTitle}</h1>
      <p>{heroText}</p>
      <button>{btnText}</button>
    </article>
  );
};

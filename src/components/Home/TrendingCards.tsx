import { data } from '../../assets/data';

export const TrendingCards = () => {
  const { trending } = data;

  return (
    <div className="trending flex">
      {trending.map((article) => (
        <article className="trending-card flex">
          <img src={article.img} alt={article.subtitle} />
          <div className="trending-card-text">
            <h4>{article.title}</h4>
            <h5>{article.subtitle}</h5>
            <p>{article.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

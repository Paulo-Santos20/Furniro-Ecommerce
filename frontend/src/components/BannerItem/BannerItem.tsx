import { Link } from "react-router-dom";
import "./BannerItem.css";

const BannerItem: React.FC<IPropsBanner> = ({
  imgUrl,
  p,
  title,
  rectangleSrc,
  linkHome,
  linkShop,
  type,
  icon,
}) => {
  const blockType = type === "tipo1" ? "banner--type1" : "banner--type2";
  return (
    <section className={`banner ${blockType}`}>
      <div className="banner__content">
        <img src={imgUrl} alt={title} className="banner__background-image" />

        {type === "tipo1" && (
          <img className="banner__rectangle" src={rectangleSrc} alt={title} />
        )}
        <p className="banner__overlay-text">{p}</p>
        {title && <h1 className="banner__title">{title}</h1>}
        {linkHome && (
          <Link to={linkHome} className="banner__link banner__link--home">
            Home
          </Link>
        )}
        <img src={icon} alt={title} className="banner__icon" />
        {linkShop && (
          <Link to={linkShop} className="banner__link banner__link--shop">
            Shop
          </Link>
        )}
      </div>
    </section>
  );
};

interface IPropsBanner {
  imgUrl: string;
  title?: string;
  linkHome?: string;
  linkShop?: string;
  p?: string;
  rectangleSrc?: string;
  icon?: string;
  type: string;
}

export default BannerItem;
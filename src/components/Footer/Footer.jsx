import css from "./Footer.module.css";
import icons from "../../assets/icons/icons.svg";

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <svg width="122" height="24">
          <use href={`${icons}#icon-logo`} />
        </svg>
      </div>
      <h2 className={css.title}>
        Empower yourself with the best books insights
      </h2>
      <p className={css.paragraf}>Social media:</p>
      <ul className={css.socialList}>
        <li className={css.socialItems}>
          <svg width="24" height="24">
            <use href={`${icons}#icon-facebook`} />
          </svg>
        </li>
        <li className={css.socialItems}>
          <svg width="24" height="24">
            <use href={`${icons}#icon-union`} />
          </svg>
        </li>
        <li className={css.socialItems}>
          <svg width="24" height="24">
            <use href={`${icons}#icon-twitter`} />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

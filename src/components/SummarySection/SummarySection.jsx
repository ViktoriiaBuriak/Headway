import css from "./SummarySection.module.css";
import book from "../../assets/images/book.png";
import iPhone from "../../assets/images/iPhone.png";
import icons from "../../assets/icons/icons.svg";

const SummarySection = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Summary is the new black</h2>
      <p className={css.paragraf}>
        Use summaries: comprehensive 15-min abstracts from nonfiction books with
        the main concepts and recommendations.
      </p>
      <div className={css.imageWrap}>
        <img src={book} alt="electronic book" />
      </div>
      <p className={css.subtitle}>Typical book</p>
      <p className={css.text}>320 pages ~ 20 hours</p>
      <div className={css.iconWrap}>
        <svg height="77">
          <use href={`${icons}#icon-vector`} />
        </svg>
      </div>
      <p className={css.subtitle}>Key ideas & insights</p>
      <div className={css.iconWrap}>
        <svg height="77">
          <use href={`${icons}#icon-vector-down`} />
        </svg>
      </div>
      <div className={css.imageWrap}>
        <img src={iPhone} alt="iPhone screen" />
      </div>
      <p className={css.subtitle}>Summary</p>
      <p className={css.text}>~ 15 minutes</p>
    </div>
  );
};

export default SummarySection;

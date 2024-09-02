import css from "./ReviewsSection.module.css";
import icons from "../../assets/icons/icons.svg";
import customer1 from "../../assets/images/photo.png";
import customer2 from "../../assets/images/photo-1.png";
import customer3 from "../../assets/images/photo-2.png";
import customer4 from "../../assets/images/photo-3.png";

const ReviewsSection = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>People love the Headway app</h2>
      <p className={css.paragraf}>
        Become a member of our global community of
        <span> 7 million people</span>
      </p>
      <ul className={css.customerList}>
        <li className={css.customerItems}>
          <div>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
          </div>
          <p className={css.customerParagraf}>
            This app simplifies books into super condensed but easy-to-digest
            snippets. Listened to almost all of the Art of Saying No during my
            warm up/stretch sesh today. A powerful tool I recommend to anyone
            who’s busy and can’t find time to sit down to read!
          </p>
          <div className={css.customerWrap}>
            <img src={customer1} alt="customer avatar" />
            <span>mr.rageright</span>
            <svg width="16" height="16">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </div>
        </li>
        <li className={css.customerItems}>
          <div>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
          </div>
          <p className={css.customerParagraf}>
            Headway app is one of the best investments I’ve ever made into
            myself outside of spiritual stuff. Summarized books that you can
            read or listen to!
          </p>
          <div className={css.customerWrap}>
            <img src={customer2} alt="customer avatar" /> <span>mcogbonna</span>
            <svg width="16" height="16">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </div>
        </li>
        <li className={css.customerItems}>
          <div>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
          </div>
          <p className={css.customerParagraf}>
            In case you often find a book you just started — the Headway app is
            for you. It’s an audiobook reader that summarized all the key
            lessons in that great book you’ve been aspiring to read, but you
            didn’t finish.
          </p>
          <div className={css.customerWrap}>
            <img src={customer3} alt="customer avatar" />
            <span>thefinestyler</span>
            <svg width="16" height="16">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </div>
        </li>
        <li className={css.customerItems}>
          <div>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
          </div>
          <p className={css.customerParagraf}>
            So excited for my latest app subscription for self-growth! You can
            set reading goals, take challenges or read offline! 🤓
          </p>
          <div className={css.customerWrap}>
            <img src={customer4} alt="customer avatar" />
            <span>thisinnagirl</span>
            <svg width="16" height="16">
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </div>
        </li>
      </ul>
      <ul className={css.ratingList}>
        <li className={css.ratingItems}>
          <div className={css.ratingWrap}>
            <p className={css.appRating}>4.7</p>
            <svg width="32" height="32">
              <use href={`${icons}#icon-app-store`} />
            </svg>
          </div>
          <div>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
          </div>
          <span className={css.ratingText}>50K ratings</span>
        </li>
        <li className={css.ratingItems}>
          <div className={css.ratingWrap}>
            <p className={css.googleRating}>4.2</p>
            <svg width="32" height="32">
              <use href={`${icons}#icon-google-play`} />
            </svg>
          </div>
          <div>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
            <svg width="16" height="16">
              <use href={`${icons}#icon-star-fill`} />
            </svg>
          </div>
          <span className={css.ratingText}>31k ratings</span>
        </li>
      </ul>
    </div>
  );
};

export default ReviewsSection;

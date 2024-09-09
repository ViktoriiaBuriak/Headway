import css from "./DetermineSection.module.css";

import icons from "../../assets/icons/icons.svg";
import book1 from "../../assets/images/book-1.png";
import book2 from "../../assets/images/book-2.png";
import book3 from "../../assets/images/book-3.png";
import book4 from "../../assets/images/book-4.png";
import book5 from "../../assets/images/book-5.png";
import book6 from "../../assets/images/book-6.png";
import book7 from "../../assets/images/book-7.png";
import book8 from "../../assets/images/book-8.png";
import book9 from "../../assets/images/book-9.png";
import book10 from "../../assets/images/book-10.png";
import book11 from "../../assets/images/book-11.png";
import book12 from "../../assets/images/book-12.png";
import book13 from "../../assets/images/book-13.png";
import book14 from "../../assets/images/book-14.png";
import book15 from "../../assets/images/book-15.png";

const DetermineSection = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Determine your goal and go ahead!</h2>
      <p className={css.paragraf}>
        Learn something new every day from Self-Growth, Happiness, Money,
        Health, and many other categories. Benefit from unlimited access to
        world best thoughts.
      </p>
      <div className={css.categoryContainer}>
        <ul className={css.categoryList}>
          <li className={css.categoryItems}>All categories</li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-mountain`} />
            </svg>
            Self-Growth
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-smile`} />
            </svg>
            Happiness
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-credit-card`} />
            </svg>
            Money & Investment
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-speaker`} />
            </svg>
            Negotiation
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-apple`} />
            </svg>
            Health
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-planet`} />
            </svg>
            Spirituality
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-hourglass`} />
            </svg>
            Productivity
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-lock`} />
            </svg>
            Business & Career
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-heart`} />
            </svg>
            Love & Sex
          </li>
          <li className={css.categoryItems}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-ball`} />
            </svg>
            Sports & Fitness
          </li>
        </ul>
      </div>
      <ul className={css.bookList}>
        <div className={`${css.row} ${css.row1}`}>
          <li className={css.bookItems}>
            <img src={book1} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book2} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book3} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book4} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book5} alt="book title" />
          </li>
        </div>
        <div className={`${css.row} ${css.row2}`}>
          <li className={css.bookItems}>
            <img src={book6} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book7} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book8} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book9} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book10} alt="book title" />
          </li>
        </div>
        <div className={`${css.row} ${css.row3}`}>
          <li className={css.bookItems}>
            <img src={book11} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book12} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book13} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book14} alt="book title" />
          </li>
          <li className={css.bookItems}>
            <img src={book15} alt="book title" />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default DetermineSection;

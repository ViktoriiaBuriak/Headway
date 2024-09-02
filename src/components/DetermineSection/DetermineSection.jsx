import css from './DetermineSection.module.css'
import icons from "../../assets/icons/icons.svg";

const DetermineSection = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Determine your goal and go ahead!</h2>
      <p className={css.paragraf}> 
        Learn something new every day from Self-Growth, Happiness, Money,
        Health, and many other categories. Benefit from unlimited access to
        world best thoughts.
      </p>
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
      <ul className={css.bookList}>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
        <li className={css.bookItems}></li>
      </ul>
    </div>
  );
}

export default DetermineSection
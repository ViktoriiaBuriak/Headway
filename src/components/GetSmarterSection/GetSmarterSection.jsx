import css from "./GetSmarterSection.module.css";
import NYT from "../../assets/images/NYT.png";
import HBR from "../../assets/images/HBR.png";
import amazon from "../../assets/images/amazon.png";
import group from "../../assets/images/group.png";
import fire from "../../assets/images/fire.png";
import min from "../../assets/images/15-min.png";
import dailyGoal from "../../assets/images/daily-goal.png";
import dailyGoalBack from "../../assets/images/daily-goal-back.png";

const GetSmarterSection = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Get smarter with the least effort</h2>
      <ul className={css.firstGroup}>
        <li className={css.itemNYT}>
          <img src={NYT} alt="logo" />
        </li>
        <li className={css.itemHBR}>
          <img src={HBR} alt="logo" />
        </li>
        <li className={css.itemAmazon}>
          <img src={amazon} alt="logo" />
        </li>
      </ul>
      <h3 className={css.heading}>Learn from the best</h3>
      <p className={css.paragraf}>
        Highlighted by top reviewers, we picked only the most outstanding
        bestsellers for you.
      </p>
      <div className={css.secondGroup}>
        <img src={group} alt="logo" />
      </div>
      <h3 className={css.heading}>Get key insights</h3>
      <p className={css.paragraf}>
        Major ideas in a bite-sized form. Long reads no more!
      </p>
      <ul className={css.thirdGroup}>
        <li className={css.itemFire}>
          <img src={fire} alt="logo" />
        </li>
        <li className={css.itemMin}>
          <img src={min} alt="logo" />
        </li>
        <li className={css.itemDaily}>
          <img src={dailyGoal} alt="days" />
        </li>
        <li className={css.itemDailyBack}>
          <img src={dailyGoalBack} alt="background" />
        </li>
      </ul>
      <h3 className={css.heading}>Build a reading habit</h3>
      <p className={css.paragraf}>
        Consistency is the key to top performance. Only 15 minutes per day to
        make reading your brand new habit!
      </p>
    </div>
  );
};

export default GetSmarterSection;

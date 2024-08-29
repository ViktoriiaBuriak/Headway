import css from "./Main.module.css";
import main from "../../assets/images/image-main.png";
import chart from "../../assets/images/chart.png";

const Main = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Become a better you</h1>
      <p className={css.paragraf}>
        with 15-min bite-sized reads and audios of the world’s best nonfiction
        books
      </p>
      <div className={css.imageContainer}>
        <img src={chart} alt="chart" />
        <img src={main} alt="main" />
      </div>
    </div>
  );
};

export default Main;

import css from "./ReadOrListenSection.module.css";
import icons from "../../assets/icons/icons.svg";
import { useState } from "react";

import listenImg from "../../assets/images/listen.png";
import readImg from "../../assets/images/read.png";

const ReadOrListenSection = () => {
  const [backgroundImage, setBackgroundImage] = useState(listenImg);

  const handleAudioClick = () => {
    setBackgroundImage(listenImg);
  };

  const handleTextClick = () => {
    setBackgroundImage(readImg);
  };

  return (
    <div
      className={css.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2 className={css.title}>Read or Listen</h2>
      <p className={css.paragraf}>
        Commuting, jogging, or stuck in line? Enjoy the best books in a
        condensed format. Summaries have an audio version, narrated by
        professional voice actors.
      </p>
      <div className={css.buttonWrap}>
        <p className={css.text}>Listen</p>
        <ul className={css.buttonList}>
          <li className={css.buttonItemsListen} onClick={handleAudioClick}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-audio`} />
            </svg>
          </li>
          <li className={css.buttonItems} onClick={handleTextClick}>
            <svg width="24" height="24">
              <use href={`${icons}#icon-text`} />
            </svg>
          </li>
        </ul>
        <p className={css.text}>Read</p>
      </div>
      {/* <div className={css.imageWrap}>
        <img src={listen} alt="" />
      </div> */}
    </div>
  );
};

export default ReadOrListenSection;

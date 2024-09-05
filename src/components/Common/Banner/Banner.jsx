/* eslint-disable react/prop-types */
import styles from "./style.module.css";
// import BannerData from "../Banner/Banner.js";

function Banner({ Bdata1, isrotate, isBackground}) {
  console.log(Bdata1, isrotate, isBackground);
  const {subtitle, mainHeading, bannerPara, bannerBtn, bannerImg} =Bdata1;
  return (
    <div className={`${styles.bannerWrapper} ${isrotate ? styles.BannerRotate : ''} ${isBackground ? styles.DarkBackground : ''}`}>
          <>
        <div className={styles.textWrap}>
          <h5>{subtitle}</h5>
          <h1>{mainHeading}</h1>
          <p>{bannerPara}</p>
          <button className="btn banner">{bannerBtn}</button>
        </div>
      <div className={styles.ImgWrap}>
          <img src={bannerImg} alt="" />
      </div> 
          </>
    </div>
  )
}

export default Banner

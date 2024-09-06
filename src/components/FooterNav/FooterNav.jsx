import FooterNavStyle from "./FooterNav.module.css";

const FooterNav = ({footericonData}) => {
  return (
    <div className={FooterNavStyle.footernavWrapper}>
      <img src="./assets/images/logo.png" alt="" />
      <p>Ultra Ⓒ 2024</p>
      <div className={FooterNavStyle.iconWrapper}>
      {
        footericonData.map((item, index)=>(
            <i key={index} className={item.iconClass}></i>
        ))
      }
      </div>
    </div>
  )
}

export default FooterNav

import FooterStyle from "./Footer.module.css";

function Footer({FData}) {
  return (
    <div className={FooterStyle.footerWrapper}>
      {
        FData.map((item, index)=>(
          <div key={index} className={FooterStyle.footerBox}>
            <ul>
            <li><h4>{item.heading}</h4></li>
            <li><a href="">{item.link[0]}</a></li>
            <li><a href="">{item.link[1]}</a></li>
            <li><a href="">{item.link[2]}</a></li>
            <li><a href="">{item.link[3]}</a></li>
            <li><a href="">{item.link[4]}</a></li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default Footer

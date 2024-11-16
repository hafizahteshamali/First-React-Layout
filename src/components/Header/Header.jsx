import { NavLink } from "react-router-dom";
import HeaderStyle from "./Header.module.css";


function Header({NavbarData}) {
  return (
    <div className={HeaderStyle.headerWrapper}>
        <div className="HeaderStyle.logoWrapper">
            <a href="#"><img src="./assets/images/logo.png" alt="" /></a>
        </div>

        <div className={HeaderStyle.navigation}>
            <ul>
                {
                  NavbarData.map((item, index)=>(
                  <li key={index}>
                  <NavLink to={item.NavLink}>{item.NavName}</NavLink>
                  </li>
                  ))
                }
                <button className="btn">Signup</button>
            </ul>
        </div>
    </div>
  )
}
export default Header

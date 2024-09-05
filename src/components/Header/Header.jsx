import HeaderStyle from "./Header.module.css";


function Header() {
  return (
    <div className={HeaderStyle.headerWrapper}>
        <div className="HeaderStyle.logoWrapper">
            <a href="#"><img src="./assets/images/logo.png" alt="" /></a>
        </div>

        <div className={HeaderStyle.navigation}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
                <button className="btn">Signup</button>
            </ul>
        </div>
    </div>
  )
}
export default Header

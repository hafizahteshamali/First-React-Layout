import PrefooterStyle from "./PreFooter.module.css";

const PreFooter = ({data}) => {
  const {heading, subTitle, btnText} = data;
  return (
    <div className={PrefooterStyle.newsletter}>
        <h1>{heading}</h1>
        <h3>{subTitle}</h3>
        <div className={PrefooterStyle.inputWrapper}>
            <input type="text" placeholder="your email"/>
            <button>{btnText}</button>
        </div>
    </div>
  )
}

export default PreFooter

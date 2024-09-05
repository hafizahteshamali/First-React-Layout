import CardStyle from "./Card.module.css";

const Card = ({Data}) => {
  return (
    <div className={CardStyle.cardWrapper}>
        <h2>Our Services</h2>
      <div className={CardStyle.cardBoxes}>
        {
            Data.map((item, index)=>(
            <div key={index} className={CardStyle.Box}>
                <img src={item.imgUrl} alt="" />
                <h3>{item.Title}</h3>
                <h1>{item.price}</h1>
                <h6>{item.duration}</h6>
                <p>{item.firstPara}</p>
                <p>{item.secondPara}</p>
                <p>{item.thirPara}</p>
                <button className="btn">{item.cardBtn}</button>
        </div>
            ))
        }
      </div>
    </div>
  )
}

export default Card

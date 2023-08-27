import "../style.css"



const Card = ({title,main}) => {
    return (
<div className="card">
<div className="card_title">
    {title}
</div>
<div className="card_main">
    {main}
</div>
<button className="card_btn">buy</button>
</div>  
  )
}

export default Card
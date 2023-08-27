import "./style.css"


const Input = ({text}) => {
    return (
        <div className="input_div">
            <p className="input_title">{text}</p>
            <form className="input_form">
                <input className="input" />
            </form>
        </div>

    )
}


export default Input
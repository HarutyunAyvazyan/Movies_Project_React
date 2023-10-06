import "./style.css"



const Input = ({ label, placeholder, type, onChange, name, value, onBlur,style }) => {
    return (
        <div className="input_div">
            <label className="input_title">{label}</label>
            <input className="input"
                // required
                // onChange={onChange}
                // type={type}
                // placeholder={placeholder}
                style={style}
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                placeholder={placeholder}
                label={label}
            />
        </div>

    )
}


export default Input
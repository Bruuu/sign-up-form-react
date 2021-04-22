import React from 'react';

const Input = ({value, name, placeholder, onChange, type="text", error}) => {
    let classes = "form-control"
    if (error) {
        classes += " error"
    }
    return (<div className={classes}>
                <input value={value}
                    name={name}
                    id={name}
                    type={type}
                    className="input"
                    placeholder={placeholder}
                    onChange={onChange}/>
                <i class="fa fa-exclamation-circle"></i>
                {error && (<small>{error}</small>)}
            </div>);
}
export default Input;
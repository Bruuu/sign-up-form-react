import React from 'react';

const Input = ({value, name, onChange, placeholder, type}) => {
    return (<div className="form-control">
    <input value={value}
           name={name}
           id={name}
           type={type}
           className="input"
           placeholder={placeholder}
           onChange={onChange}/>
    <i className="fa fa-exclamation-circle"></i>
    <small>Error message</small>
</div>);
}
export default Input;
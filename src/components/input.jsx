import React from 'react';

const Input = ({value, name, onChange, placeholder, type, error}) => {
    return (<div className="form-control">
    <input value={value}
           name={name}
           id={name}
           type={type}
           className="input"
           placeholder={placeholder}
           onChange={onChange}/>
           {error && (<small>{error}</small>)}
           </div>);
}
export default Input;
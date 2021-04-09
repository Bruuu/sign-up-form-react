import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
class SignUpForm extends Component {
    state = { 
        data: {firstName: "", lastName: "", email: "", password: ""},
        errors: {}
     };

    schema = {
        firstName: Joi.required(),
        lastName: Joi.required().label('lastName'),
        email: Joi.string().email().required().label('email'),
        password: Joi.required().label('password'),
    };

    renderInput(name, placeholder, type = "text", value = null) {
        const { data, errors } = this.state;
        return (
            <Input
                type={type}
                value={data[name]}
                onChange={this.handleChange}
                name={name}
                placeholder={placeholder}
                error={errors[name]}
            />
        )
    };
    renderButton(label) {
        return (
            <button className="btn-submit">{label}</button>
        )
    };

    handleSubmit = e => {
        e.preventDefault();

        // const errors = this.validate();
        // this.setState({errors: errors || {} });
        // if (errors) return;
            
        this.doSubmit();     
    };
    handleChange = ({ currentTarget: input }) => {
        // const errors = {...this.state.errors};
        // const errorMessage = this.validateProperty(input);

        // if (errors) errors[input.name] = errorMessage;
        // else delete errors[input.name];
        
        const account = {...this.state.data};
        account[input.name] = input.value;
        this.setState({ account });
    };
   
    doSubmit = () => {
        console.log("Submitted");
    };

    render() { 
        return <React.Fragment><form id="SignUpForm" className="form signup-form centered shadow" onSubmit={this.handleSubmit}>
        {this.renderInput('firstName', 'First Name')}
        {this.renderInput('lastName', 'Last Name')}
        {this.renderInput('email', 'Email')}
        {this.renderInput('password', 'Password', 'password')}
        {this.renderButton('Claim your free trial')}
        <p>By clicking the button, you are agreeing to our <a href="#" className="link bold">Terms and Services</a></p>
        
    </form></React.Fragment>;
    }
}
 
export default SignUpForm;
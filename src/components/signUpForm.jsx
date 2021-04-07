import React, { Component } from 'react';
import Input from './input';
class SignUpForm extends Component {
    state = { 
        account: {firstName: "", lastName: "", email: "", password: ""}
     }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Submitted');
    }
    handleChange = ({currentTarget: input}) => {
        const account = {...this.state.account};
        account[input.name] = input.value;
        this.setState({account});
    }

    render() { 
        const account = this.state.account;
        return <React.Fragment><form id="SignUpForm" className="form signup-form centered shadow" onSubmit={this.handleSubmit}>
        <Input 
            value={account.firstName}
            name="firstName"
            onChange={this.handleChange}
            placeholder="First Name"
            type="text" />
        <Input 
            value={account.lastName}
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={this.handleChange}/>

        <Input 
            value={account.email}
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleChange}/>
        <Input 
            value={account.password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}/>
        
        <button className="btn-submit" type="submit">Claim your free trial</button>
        <p>By clicking the button, you are agreeing to our <a href="#" className="link bold">Terms and Services</a></p>
        
    </form></React.Fragment>;
    }
}
 
export default SignUpForm;
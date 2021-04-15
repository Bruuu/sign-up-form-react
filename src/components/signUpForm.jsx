import React, { useState } from 'react';
import Input from './input';
import validate from './validateForm';

function SignUpForm() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    return (
        <React.Fragment>
            <form id="SignUpForm" className="form signup-form centered shadow" onSubmit={handleSubmit}>
                <Input
                    name="firstName"
                    value={values.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                    error={errors.firstName}
                />
                <Input
                    name="lastName"
                    value={values.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                    error={errors.lastName}
                />
                <Input
                    name="email"
                    value={values.email}
                    placeholder="Email"
                    onChange={handleChange}
                    error={errors.email}
                />
                <Input
                    name="password"
                    value={values.password}
                    placeholder="Password"
                    type="password"
                    onChange={handleChange}
                    error={errors.password}
                />
                <button class="btn-submit" type="submit">Claim your free trial</button>
                <p>By clicking the button, you are agreeing to our <a href="#" className="link bold">Terms and Services</a></p>
            </form>
        </React.Fragment>);

}
 
export default SignUpForm;
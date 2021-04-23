import React, { useState } from 'react';
import Input from './input';

function SignUpForm() {
    const validateRequired = (field) => (value) => {
        if (value.trim() === '') {
            return `${field} cannot be empty`;
        }

        return '';
    }

    const validateEmail = (field) => (value) => {
        if ((!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value.toLowerCase()))) {
            return `${field} must be a valid email address`;
        }

        return '';
    }

    const validations = {
        firstName: validateRequired('firstName'),
        lastName: validateRequired('lastName'),
        email: (value) => {
            if (value.trim() === '') {
                return validateRequired('email')(value);
            }
            return validateEmail('email')(value);
        },
        password: validateRequired('password'),
    }

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        const validationResults = Object.entries(values).map(([field, value]) => {
            const validator = validations[field];
            return {
                [field]: validator(value),
            }
        });

        const validationResult = validationResults.reduce((accu, item) => {
            return {
                ...accu,
                ...item,
            };
        }, {});

        setErrors(validationResult);
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });

        const validate = validations[name];
        const validationResult = validate(value);

        setErrors({
            ...errors,
            [name]: validationResult
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
                <button className="button btn-submit" type="submit">Claim your free trial</button>
                <p>By clicking the button, you are agreeing to our <a href="#" className="link bold">Terms and Services</a></p>
            </form>
        </React.Fragment>);

}

export default SignUpForm;

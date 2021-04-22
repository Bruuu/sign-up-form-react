export default function validate(values) {
    let errors = {};
    if ((values.email) && (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email.toLowerCase())))
        errors.email = "Looks like this is not an email";
    for (let field in values) {
            if (!values[field].trim()) {
               errors[field] = `${field} cannot be empty`; //use lodash
            }
    }
    return errors;
}
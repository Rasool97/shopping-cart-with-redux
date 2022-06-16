const validateForm = (data) => {
    const errors = {};

    if(!data.name.trim()) {
        errors.name = 'Name is required!';
    } else {
        delete errors.name;
    }
    
    if(!data.email.trim()) {
        errors.email = 'Email is required!';
    }
    else if(!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = 'Email is invalid!';
    } else {
        delete errors.email;
    }

    if(!data.subject) {
        errors.subject = 'Subject is required!';
    } else {
        delete errors.subject;
    }

    if(!data.message) {
        errors.message = 'Message is required!';
    }  else {
        delete errors.message;
    }

    return errors;
}

export default validateForm;
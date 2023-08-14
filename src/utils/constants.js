export const REGEXP_EMAIL = /^((([0-9A-Za-z][-0-9A-z.]+[0-9A-Za-z])|([0-9А-Яа-я][-0-9А-я.]+[0-9А-Яа-я]))@([-A-Za-z]+\.){1,2}[-A-Za-z]{2,})$/u
export const REGEXP_NAME = /(^[a-яё]+(?:[ -][a-яё]+)*$)|(^[a-z]+(?:[ -][a-z]+)*$)/i
export const validateInput = (id, value) => {
    let valid;
    switch (id) {
        case 'email': 
            valid = REGEXP_EMAIL.test(value);
        break;
        case 'name':
            valid = REGEXP_NAME.test(value);
        break;
        default: {
            valid = true;
        }
    }

    return valid;
        
}
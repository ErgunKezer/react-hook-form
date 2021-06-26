const name = {
    required: {
        value: true,
        message: 'Name field is required',
    },

    pattern: {
        value: /^[A-Za-z\s]+$/i,
        message: 'No number in name field',
    },
};
const age = {
    required: {
        value: true,
        message: 'Age field is required',
    },
    min: {
        value: 18,
        message: 'Age needs to be higher than 18',
    },
    max: {
        value: 99,
        message: 'Age needs to be smaller than 99',
    },
};
const userName = {
    required: {
        value: true,
        message: 'User name  field is required',
    },
    pattern: {
        value: /^[^\W]+$/gim,
        message: 'No space in user name',
    },
};
const agreement = {
    required: {
        value: true,
        message: 'Agreement field is required. Please check the agreement',
    },
};
const password = {
    required: {
        value: true,
        message: 'Password is required',
    },
    minLength: {
        value: 8,
        message: 'Password needs to minimum 8 characters',
    },
};

export { name, age, agreement, password, userName };

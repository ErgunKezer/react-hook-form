const name = {
    required: true,
    pattern: /^[A-Za-z\s]+$/i,
};
const age = {
    required: true,
    min: 18,
    max: 99,
};

export { name, age };

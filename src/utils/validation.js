export const validateRecipeForm = values => {
    const errors = {};
    const requiredFields = [
        'name'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });
    return errors;
};
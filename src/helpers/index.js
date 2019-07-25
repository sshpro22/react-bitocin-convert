// Validation of the input value.
export const isRequired = (value) => (value === undefined || value === "" || value === null) && "Required"
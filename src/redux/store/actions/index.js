export const incrementCounter = () => {
    return {
        type: "INC",
    };
};

export const decrementCounter = () => {
    return {
        type: "DEC",
    };
};

export const addCounter = (value) => {
    return {
        type: "ADD",
        payload: value,
    };
};

export const substractCounter = (value) => {
    return {
        type: "SUB",
        payload: value,
    };
};

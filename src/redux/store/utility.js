export const updateObject = (oldObj, updatedVal) => {
    return {
        ...oldObj,
        ...updatedVal,
    };
};

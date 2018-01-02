const storageName = 'ccRecipeBox';

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(storageName);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error.message);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(storageName, serializedState);
    } catch (error) {
        console.log(error.message);
    }
};
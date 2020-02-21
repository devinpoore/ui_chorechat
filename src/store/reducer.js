const initialState = {
    testState: 10
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === "INCR") {
        newState.testState++;
    }

    return newState;
};

export default reducer;
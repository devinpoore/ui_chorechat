const initialState = {
    sub_component: "roomie",
    roommate_info: [
        // {
        //     fName: "devin",
        //     lName: "poore",
        //     phone: "5097332570",
        //     verified: false
        // },
        // {
        //     fName: "devin",
        //     lName: "poore",
        //     phone: "xxxxxx2570",
        //     verified: true
        // }
    ],
    validating_roomie: false
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    // HOME COMP
    if (action.type === "TOGGLE_COMP") {

        newState.sub_component = action.comp;
    // ROOMIE_INFO COMP
    } else if (action.type === "VLDTNG_ROOMIE") {
        newState.validating_roomie = action.position;
    } else if (action.type === "APPND_ROOMIE") {
        const { fName, lName, phone } = action.roomie_info;

        const new_roomie_array = newState.roommate_info;
        new_roomie_array.push({
            fName,
            lName,
            phone,
            verified: false
        });

        newState.roommate_info = new_roomie_array;
    }

    return newState;
};

export default reducer;
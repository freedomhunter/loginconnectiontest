export const firstReducer = (state = '', action) => {
    switch (action.type) {
        case 'FIRST_ACTION':
            return action.payload;

        default:
            return state;
    }
}


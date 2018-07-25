const initialState = {
    name: 'NoUser'
};

export function changeUser() {

    return {
        type: 'CHANGE',
        name: 'Yeahh'
    }
}

export function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'CHANGE':
            return { ...state, name: action.name }

        default:
            return state;
    }
}
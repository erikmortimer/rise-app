export default (state, action) => {
    switch(action.type) {
        case 'ADD_MOVEMENT':
            return {
                ...state,
                movements: [action.payload, ...state.movements]
            }
        default:
            return state;
    }
}
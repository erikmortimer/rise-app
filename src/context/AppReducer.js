export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_MOVEMENT':
            return {
                ...state,
                movements: state.movements.filter(movement => movement.id !== action.payload)
            }
        case 'ADD_MOVEMENT':
            return {
                ...state,
                movements: [action.payload, ...state.movements]
            }
        default:
            return state;
    }
}
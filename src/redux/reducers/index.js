export function activities(state = [], action) {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.activities
        case 'FETCH_ACTIVITY':
            return [...state, action.activity]
        case 'UPDATE_ACTIVITY':
            return state.map( activity => activity.id === action.updatedActivity.id ? action.updatedActivity : activity )
        case 'DELETE_ACTIVITY':
            return state.filter( activity => activity.id !== action.deletedActivity.id )
        default:
            return state
    }
}

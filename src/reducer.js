const initial = []


export function reducer(state = initial, action) {

    switch (action.type) {
        case "ADD_TODO": {
            const newTodo = {
                id: Math.random(),
                text: action.payload
            }
            return [...state, newTodo]
        }
        case "DELETE_TODO": { 
            return state.filter((el)=>el.id !== action.payload)
        }
        case "DELETE_ALL_TODO": { 
            return state = []
        }
        default: return state
    }
}
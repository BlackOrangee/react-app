export const actions = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    TOGGLE_COMPLETE: 'TOGGLE_COMPLETE',
    UPDATE_TASK: 'UPDATE_TASK',
    SET_TASKS: 'SET_TASKS'
}

const toDoReducer = (state, action) => {
    //console.log(state, action);

    switch (action.type) {
        case actions.ADD_TASK:
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    completed: false
                }
            ];

        case actions.DELETE_TASK:
            return state.filter(task => task.id !== action.payload.id);
        
        case actions.TOGGLE_COMPLETE:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    }
                }
                return task;
            });
        
        case actions.UPDATE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) {
                    return {
                        ...task,
                        title: action.payload.newTitle
                    }
                }
                return task;
            })
        
        case actions.SET_TASKS:
            return action.payload.tasks;

        default:
            return state;
    }

}

export default toDoReducer;
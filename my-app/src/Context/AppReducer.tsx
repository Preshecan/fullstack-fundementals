import {IAction, ITask} from '../interfaces';

let AppReducer = (state: any, action: IAction) =>{
    switch(action.type){
        case 'GET_TASKS':
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        case 'COMPLETE_TASK':
        return {
            ...state,
            todos: state.todos.filter((task: ITask) => task.id !== action.payload)
        }
        case 'ADD_TASK':
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
        default:
            return {...state};
    }
}

export default AppReducer;
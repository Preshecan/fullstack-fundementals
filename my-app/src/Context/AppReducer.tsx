import {IAction, ITask} from '../interfaces';

let AppReducer = (state: any, action: IAction) =>{
    switch(action.type){
        case 'COMPLETE_TASK':
        return {
            ...state,
            todos: state.todos.filter((task: ITask) => task.taskName !== action.payload)
        }
        case 'ADD_TASK':
            console.log(action.payload);
        return {
            ...state,
            todos: [action.payload, ...state.todos]
        }
        default:
            return {...state};
    }
}

export default AppReducer;
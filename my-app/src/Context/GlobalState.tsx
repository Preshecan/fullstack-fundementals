import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { ITask } from '../interfaces';

// interface IState {
//     todos: Array<ITask>
// }

//Initial state
const initialState: any = {
    todos: []
}

//create context
export const GlobalContext = createContext(initialState);

//create provider
export const GlobalProvider: React.FC = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    let completeTask = (id: string) => {
        dispatch({
            type: 'COMPLETE_TASK',
            payload: id
        });
    }

    let addTask = (task: ITask) => {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        });
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            completeTask,
            addTask
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { ITask } from '../interfaces';
import axios from 'axios';

// interface IState {
//     todos: Array<ITask>
// }

//Initial state
const initialState: any = {
    todos: [],
    error: null,
    loading: true
}

//create context
export const GlobalContext = createContext(initialState);

//create provider
export const GlobalProvider: React.FC = ({ children }) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    let getTodos = async() =>{
        try{
            const res = await axios.get('/api/v1/todoList');

            dispatch({
                type: 'GET_TASKS',
                payload: res.data.data
            })
        }catch(err){
            console.log(err);
        }
    }

    let completeTask = async (id: number) => {
        try{
            await axios.delete(`api/v1/todoList/${id}`);

            dispatch({
                type: 'COMPLETE_TASK',
                payload: id
            });
        }catch(err){
            console.log(err);
        }
    }

    let addTask = async(task: ITask) =>{
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try{
            const res = await axios.post('api/v1/todoList', task, config);

            dispatch({
                type: 'ADD_TASK',
                payload: res.data.data
            })
        }catch(err){
            console.log(err);
        }
    }

    return (
        <GlobalContext.Provider value={{
            todos: state.todos,
            loading: state.loading,
            completeTask,
            addTask,
            getTodos
        }}>
            {children}
        </GlobalContext.Provider>
    );
}


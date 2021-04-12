import React, {useContext, useEffect} from 'react';
import {ITask} from '../interfaces';
import TodoTasks from './TodoTasks';
import {GlobalContext} from '../Context/GlobalState';

const TaskList = () => {
    const {todos, getTodos} = useContext(GlobalContext);

    useEffect(() => {
        getTodos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="todolist">
            {todos.map((task: ITask) =>{
                return <TodoTasks key={task.id} task={task}/>
            })}
      </div>
    )
}

export default TaskList;

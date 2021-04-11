import React, {useContext} from 'react';
import {ITask} from '../interfaces';
import TodoTasks from './TodoTasks';
import {GlobalContext} from '../Context/GlobalState';

const TaskList = () => {
    const {todos} = useContext(GlobalContext);

    return (
        <div className="todolist">
            {todos.map((task: ITask, key: number) =>{
                return <TodoTasks key={key} task={task}/>
            })}
      </div>
    )
}

export default TaskList;

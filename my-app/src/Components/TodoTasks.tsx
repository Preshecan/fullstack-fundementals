import React, {useContext} from 'react'
import { ITask } from '../interfaces';
import {GlobalContext} from '../Context/GlobalState';

interface Props {
    task: ITask;
    //completeTask(taskToDelete: string): void;
}

const TodoTasks= ({task}: Props) => {
    const {completeTask} = useContext(GlobalContext)

    return (
        <div className='task'>
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}>X</button>
        </div>
    )
}

export default TodoTasks

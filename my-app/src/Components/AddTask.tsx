import React, {useState, useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

const AddTask = () => {
    const[task, setTask] = useState<string>('');
    const[deadline, setDeadline] = useState<string>('');
    let {addTask} = useContext(GlobalContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        event.target.name === 'task' 
          ? setTask(event.target.value)
          : setDeadline(event.target.value);
    }

    const submit = (): void =>{
        const newTask = {
          taskName: task,
          deadline: +deadline
        };
        addTask(newTask);
        setTask('');
        setDeadline('');
    }

    return (
        <div className="header">
            <div className="input-container">
            <input 
                type="text" 
                placeholder='Task...' 
                name='task' 
                value={task} 
                onChange={handleChange}
            />
            <input 
                type="text" 
                placeholder='Deadline (in days)...' 
                name='deadline' 
                value={deadline} 
                onChange={handleChange}
            />
            </div>
            <button onClick={submit}>Add Task</button>
        </div>
    )
}

export default AddTask;


import React, {FC, useState} from 'react';
import './App.css';
import TodoTasks from './Components/TodoTasks';
import {ITask} from './interfaces';

const App: FC = () => {
  const[task, setTask] = useState<string>('');
  const[deadline, setDeadline] = useState<number>(0);
  const[todos, setTodos] = useState<ITask[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
    event.target.name === 'task' 
      ? setTask(event.target.value)
      : setDeadline(+event.target.value);
  }

  const addTask = (): void =>{
    const newTask = {
      taskName: task,
      deadline: deadline
    };
    setTodos([...todos, newTask]);
    setTask('');
    setDeadline(0);
  }

  const completeTask = (taskToDelete: string): void =>{
    setTodos(todos.filter((task) => task.taskName !== taskToDelete));
  }
  
  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input 
            type="text" 
            placeholder='Task...' 
            name='task' value={task} 
            onChange={handleChange}
          />
          <input 
            type="number" 
            placeholder='Deadline (in days)...' 
            name='deadline' value={deadline} 
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
        </div>
      <div className="todolist">
        {todos.map((task: ITask, key: number) =>{
          return <TodoTasks key={key} task={task} completeTask={completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;

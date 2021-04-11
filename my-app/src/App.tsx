import React, {FC} from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import TaskList from './Components/TaskList';
import {GlobalProvider} from './Context/GlobalState';

const App: FC = () => {
  // const[task, setTask] = useState<string>('');
  // const[deadline, setDeadline] = useState<number>(0);
  // const[todos, setTodos] = useState<ITask[]>([]);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
  //   event.target.name === 'task' 
  //     ? setTask(event.target.value)
  //     : setDeadline(+event.target.value);
  // }

  // const completeTask = (taskToDelete: string): void =>{
  //   setTodos(todos.filter((task) => task.taskName !== taskToDelete));
  // }
  
  return (
    <GlobalProvider>
      <div className="App">
        <AddTask />
        <TaskList />
      </div>
    </GlobalProvider>
  );
}

export default App;

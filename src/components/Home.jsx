import logo from '../logo.svg';
import '../App.css';
import { TaskItem } from "./TaskItem";
import React, {useState} from 'react'



const Home = ({name1}) => {
    const [tasks,setTasks]=useState([
        {
            
          isCompleted: true,
          name: "learnRaeact",
        },
        {
          isCompleted: true,
          name: "learnRaeact",
        },
        {
          isCompleted: true,
          name: "learnRaeact",
        },
    
    
      ]);
    
      const [textValue,setTextValue]=useState("");
    
      const handleTaskChange=(index) =>() =>{ //usa hooks
        //console.log("change");
        const arr=[...tasks];
        arr[index].isCompleted= !arr[index].isCompleted; //negado
        setTasks(arr);
      };
    
      const  handleSubmit=(event)=>{
        event.preventDefault();
        newTask(textValue);
      };
    
    
      const handleTextChange=(event)=>{ //lee rl valor
        const value=event.target.value;
        setTextValue(value);
      };
    
      const newTask =(name)=>{
        const newTask ={
          isCompleted: false,
          name: name,
        };
        setTasks([...tasks,newTask]);//clonar el array y añadir el nuevo objeto de task
      };
    
      return (
      <main>
        <form onSubmit={handleSubmit}>
          <input value={textValue} onChange={handleTextChange} type="text" placeholder="Task name"/>
          <button> Create Task</button>
        </form>
        <ul>
          {tasks.map((task, index)=>{
            return (<TaskItem isChecked={task.isCompleted} taskName={task.name} onTaskChange={handleTaskChange(index)} />);
          })}
        </ul>
    
      </main>
      );
}

export default Home

import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "react-bootstrap";
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AddTask from "./Pages/AddTask";
import TaskService from "./Service/TaskService";
import ShowTasks from "./Pages/ShowTasks";
import DisplayTask from "./Pages/DisplayTask";
import { Box, PenFill, Trash } from 'react-bootstrap-icons';
function App() {

  const [tasks,Settasks] = useState([])



  useEffect(()=>{
    TaskService.getTasks().then((task) =>{ console.log(task.data);  Settasks([...task.data]); return console.log(tasks) }); 

   console.log(tasks)
    }
  ,[]);

  const display=()=>{
    TaskService.getTasks().then((task) =>{ console.log(task.data);  Settasks([...task.data]); return console.log(tasks) }); 
   
  }
  const remove=()=>{
    TaskService.getTasks().then((task) =>{ console.log(task.data);  Settasks([...task.data]); return console.log(tasks) }); 
  
  }
 

  return (
    <div>
     <AddTask displayHandller={display}></AddTask>
     {/* <ShowTasks arr={tasks} removeHandller={remove}/> */}
     <div>

            
{/* {tasks.map((data,index)=><DisplayTask key={index} task={data} deleteHandller={remove} />)} */}
</div>
<div>
  {tasks.map((task)=>{  <div key={task.id}>
  
    
  <span>  <Box></Box>
  &nbsp;&nbsp;&nbsp;&nbsp;
      {task.id}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {task.name}
      &nbsp;&nbsp;&nbsp;&nbsp;
      {task.duration}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <PenFill></PenFill>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <div >
      <Trash></Trash>
      </div>
  </span>
  </div>})}
</div>
    </div>
  );
}

export default App;

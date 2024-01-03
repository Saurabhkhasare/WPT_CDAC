import { useState } from "react"
import TaskService from "../Service/TaskService";
const AddTask=(props)=>{

    const [task,Settask]=useState({name:'',duration:''});

    const insertTask=()=>{
        if(task.name.trim().length===0||task.duration.trim().length===0)
        {
            alert("all fields are compulsory!!")
            return;
        }
        TaskService.addTask(task);
        Settask({name:'',duration:''});
        props.displayHandller();
    }



    return(
        <div>
            <h1>Add Task</h1>
            <label for='nm'>Enter task name:</label>
            <input type="text" id='nm' value={task.name} onChange={(e)=>Settask({name:e.target.value})} placeholder="Enter Task Name" />
            <label for='dt'>Enter task duration:</label>
            <input type="text" id='dt' value={task.duration} onChange={(e)=>Settask({...task,duration:e.target.value})} placeholder="Enter Task Duration"/>
            <button onClick={insertTask}>Add</button>
        </div>  
    )





}
export default AddTask;
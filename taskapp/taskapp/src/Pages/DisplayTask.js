import React from 'react'
import 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Box, PenFill, Trash } from 'react-bootstrap-icons'
import TaskService from '../Service/TaskService'



export default function DisplayTask(props) {

    const deletetask=()=>{
        TaskService.deleteTask(props.task.id)
        props.deleteHandller()
    }

  return (
    <div>
  
    
    <span>  <Box></Box>
    &nbsp;&nbsp;&nbsp;&nbsp;
        {props.task.id}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.task.name}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.task.duration}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <PenFill></PenFill>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div onClick={deletetask}>
        <Trash></Trash>
        </div>
    </span>
    </div>
  )
}

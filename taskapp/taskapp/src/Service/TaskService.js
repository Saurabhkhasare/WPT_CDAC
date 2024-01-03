import axios from "axios";
import { Component } from "react";

class TaskService 
{
   static addTask=(task)=>{
    return axios.post("http://localhost:9090/tasks",task);
   }
   static deleteTask=(taskId)=>{
    return axios.delete("http://localhost:9090/tasks/"+taskId);
   }
   static updateTask=(task)=>{
    return axios.put("http://localhost:9090/tasks/"+task.id,task);
   }
   static getTasks=()=>{
    return axios.get("http://localhost:9090/tasks");
   }
   static getTaskById=(taskId)=>{
    return axios.get("http://localhost:9090/tasks/"+taskId);
   }
}
export default TaskService;
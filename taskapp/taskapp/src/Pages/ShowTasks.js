import 'react-bootstrap-icons'
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayTask from './DisplayTask';





const ShowTasks=(props)=>{
   const deleteTask=()=>{
    props.removeHandller();
   }

    return(
        <div>


        {props.arr.map((data,index)=><DisplayTask key={index} task={data} deleteHandller={deleteTask} />)}
        </div>
    )

}
export default ShowTasks;
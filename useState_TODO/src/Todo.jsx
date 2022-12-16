import { useState } from "react";
import { v4 as uniqueId } from 'uuid';
function Todo()
{ 
    const[taskName,setTaskName]=useState("");
    const[taskList,setTaskList]=useState([]);
    const[isediting,enableEditing]=useState(null);
    const[newtaskName,setNewTaskName]=useState("");


    //Adding the Task to list
    function addTask(taskTitle)
    {
         if(!taskTitle)
         {
            alert("Task Cannot be Empty")
            return;
         }

         let TaskObj={
            id:uniqueId(),
            name:taskTitle
         };

         setTaskList(
            (prevList)=>{
                  return [...prevList,TaskObj];
            }
         );
         

         setTaskName("");


    }

    function deleteTask(deleteID)
    {
       let newTaskList=taskList.filter((item)=>item.id!=deleteID) ;
       console.log(newTaskList);
      setTaskList(newTaskList);
    }

    function editTask(obj)
    {
          console.log(obj)
           let {name,id}=obj;
            enableEditing(id);
            setNewTaskName(name);
    }
    

    function updateTask()
    {
          
            if(!newtaskName)
            {
                alert("Updating field cannot be empty");
            }
            
              setTaskList(
                (prevList)=>{
                      prevList.map((item)=>{ 
                        if(item.id===isediting)
                        {
                        
                            item.name=newtaskName;
                        }
                     })

                     return prevList;
                }
              )

              enableEditing(null);
    }
    return (
             <>
             <h3>GIT ToDo App</h3>
             <input placeholder="Enter the task name" value={taskName} onChange={(event)=>{setTaskName(event.target.value)}}></input><button onClick={()=>{addTask(taskName)}}>➕</button>
             <ul>
                {  
                   
                    taskList.map((item)=>{
                       return (
                        <li key={item.id}>
                      {  
                       (isediting===item.id) ?
                       (<div><input value={newtaskName} onChange={(event)=>{setNewTaskName(event.target.value)}}></input><button onClick={()=>{updateTask()}}>👍</button></div>)
                       :
                       (<div>{item.name}{" "}<button onClick={()=>{deleteTask(item.id)}}>⛔</button><button onClick={()=>{editTask(item)}}>✏️</button></div>)
                      }
                       </li>
                         
                       )
                    })
                }
             </ul>

             </>
    )
}

export default Todo;
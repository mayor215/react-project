import {useState} from "react"
import Swal from "sweetalert2";
export default function TodoApp(){
 
 //1 create useStates to store the task to be added and the array of tasks
 const[newItem, setNewItem] = useState();
 const[items, setItems] = useState([]);

// 4. write a function to handle the buttonClick event 
const addTaskHandler = () => {
//check if the input is empty(ie if theres a new item)
if(!newItem){
  Swal.fire('Please enter a task');
  return;
}
  //5. Add each task to the array of tasks after the button is clicked 

setItems([...items, {id: Date.now() , newItem}]);
}
function deleteItemHandler(id){
  //filter and retain all  the items that do not have the parameter id
  setItems(items.filter(x=> x.id !== id))
  Swal.fire('Task deleted');
}


    return<>
  <h1 className="text-center text-uppercase">Todo App</h1>
  <div className="todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-success">
  {/* 2.Add an onChange event to input  */}
  <input onChange={e => setNewItem(e.target.value)} placeholder="Enter Task Description" type="text" className=" fs-5 p-3 .rounded  me-5" />
 {/* 3. Add an onClick event to the button  */}

  <button onClick={addTaskHandler} className=" btn btn-success p-3 fs-5">Add Task</button>
  </div>

  <div className="tasks">
    {/*6 Map through the tasks and display them on the browser  */}
    
   {
    items.map(x => {
      return  <div key={x.id} className="bg-light text-success border border-success fs-5 d-flex justify-content-between m-3 p-3 rounded">
      {x.newItem}
      {/* 7. ADD thre deleteItem handler to the trash button or anything supposed to stand in for the delete */}
       <i onClick={()=> deleteItemHandler(x.id)} style={{cursor: 'pointer'}} className='fa fa-trash text-danger'></i>
  
  </div>
  
    })
   }

   
  </div>
   
    </>
}
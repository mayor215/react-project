import {useState} from "react"
import Swal from "sweetalert2";
export default function ExpenseTracker(){
 
 //1 create useStates to store the task to be added and the array of tasks
 const[newItem, setNewItem] = useState();
 const[price, setPrice] = useState();
 const[items, setItems] = useState([]);

// 4. write a function to handle the buttonClick event 
const addTaskHandler = () => {
//check if the input is empty(ie if theres a new item)
if(!newItem){
  Swal.fire('Please enter a task');
  return;
}
  //5. Add each task to the array of tasks after the button is clicked 

setItems([...items, {id: Date.now() , newItem , price:Number(price)}]);
//empty the values for the item and the price input
setNewItem("")
setPrice("")
}
//console.log(items)
function deleteItemHandler(id){
  //filter and retain all  the items that do not have the parameter id
  setItems(items.filter(x=> x.id !== id));

  Swal.fire('Expense deleted');
}


    return<>
  <h1 className="text-center text-uppercase">Expense Tracker</h1>
  <div className="todo-header d-flex flex-wrap justify-content-around m-3 p-3 rounded border border-primary">
  {/* 2.Add an onChange event to input  */}
  <input value={newItem}onChange={e => setNewItem(e.target.value)} placeholder="Enter Expense Description" type="text" className=" fs-5 p-3 .rounded  me-5" />
  <input value={price}onChange={e => setPrice(e.target.value)} placeholder="Enter Expense Price (₦)" type="number" className=" fs-5 p-3 .rounded  me-5" />
 {/* 3. Add an onClick event to the button  */}

  <button onClick={addTaskHandler} className=" btn btn-primary p-3 fs-5">Add Expense</button>
  </div>
<div>

    <h1 className="text-center text-primary m-5">Total : {items.reduce((a ,c ) => a + c.price, 0)}</h1>
</div>
  <div className="tasks">
    {/*6 Map through the tasks and display them on the browser  */}
    
   {
    items.map(x => {
      return  <div key={x.id} className="bg-light text-primary border border-primary fs-5 d-flex justify-content-between m-3 p-3 rounded">
      {x.newItem}
      <span>{x.price}</span>
      {/* 7. ADD thre deleteItem handler to the trash button or anything supposed to stand in for the delete */}
       <i onClick={()=> deleteItemHandler(x.id)} style={{cursor: 'pointer'}} className='fa fa-trash text-danger'></i>
  
  </div>
  
    })
   }

   
  </div>
   
    </>
}
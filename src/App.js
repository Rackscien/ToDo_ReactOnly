import "./App.css";
import { useState } from "react";
function App() {
  let [val, setValue]=useState("");
  let [list, setList] = useState(["Hello", "Prity"]);
  const array=[]
 const addVAlue=()=>{
   setList(val)
  // array.push(val);
  list.push(val);
  setList(list);
  console.log("hello")
  console.log("Value",list);
 }
 
  return (
    <div className="x1">
      <div className="x2">
        <h1>TO DO LIST</h1>
        <div className="x3">
         
            <input type="text" placeholder="Add list" onChange={(event)=> setValue(event.target.value)} value={val}/>
            
        
            <button onClick={()=>{addVAlue()}}>ADD</button>
        </div>
        <div className="x4">
          <ul>
            {
              // array[0]
              list.map((item)=> <li><span>{item}</span><div><button>Edit</button><button>Delete</button></div></li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;


import {useState} from "react"
import List from './List';



function App() {

  const[text,setText]=useState()
  const[datas, setDatas]=useState([])
  
  const handleAdd= ()=>{
    if(text){
      setDatas([...datas,text])
      setText("")
    }
    
  }

  return (
    <div className="text-center">
       <h1 className="text-6xl m-4 font-serif">ToDo List</h1>
       <div>
        <input type="text" className="input input-bordered input-accent w-full max-w-xs m-3" placeholder="Enter the task" value={text} onChange={(e)=>setText(e.target.value)}></input>
       <button className="btn btn-outline btn-info" onClick={handleAdd}>Add</button>
       </div>
       
       <List datas={datas} setDatas={setDatas}/>

    </div>
  );
}

export default App;

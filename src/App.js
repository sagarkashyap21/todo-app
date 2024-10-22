import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteUser,edit } from './slices/user/userSlice'
import { addUser,clear } from './slices/user/userSlice'
export default function App() {
  const count = useSelector((state) => state.users)
  let dispatch=useDispatch();
  const [name, setName] = useState("")
  const [show, setShow] = useState(false)
  const showList=()=>{
    setShow(!show);
  }
  const editUser=(id)=>{
    dispatch(edit(id))
    let a=count[id];
    setName(a);
  }
  return (
    <>
      <div className="main">
        <h1>Todo App</h1>
        <div className="d1">
          <input type="text" value={name} placeholder="enter text" onChange={(e)=>setName(e.target.value)} />
          <button id="add"  onClick={()=>{dispatch(addUser(name));setName("")}} >Add</button>
        </div>
        <button className="button" onClick={showList}>Show List</button>
      
{show?<div>
          <ul className="list">
            {count.map((e,id)=>{
              return <>
              <li  key={id}> <p>{e}</p><span><i onClick={()=>editUser(id)}  style={{color:"green",fontSize:"1.5rem"}}  class="fa-solid fa-pen-to-square"></i><i onClick={()=>dispatch(deleteUser(id))} class="fa-solid fa-trash" style={{color:"Red",fontSize:"1.5rem",marginLeft:".5rem"}}></i></span></li>
              </>
            })}
          </ul>
        </div>:""}
<button className="button" onClick={()=>dispatch(clear())}>Clear All</button>
            
      </div>
    </>
  )
}

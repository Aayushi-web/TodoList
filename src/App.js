
import React, { useState } from 'react';
import './App.css';
import Todolist from './Todolist';

function App() {
  function listItem(e){
setItems((oldItems)=>{
  return[...oldItems,inputList]
})
setInputList(" ")
  }
  function itemEvent(e){
setInputList(e.target.value);
  }
  const [inputList, setInputList]=useState("")
const [items,setItems]=useState([])
const deleteItem=(id)=>{
  console.log("delete")
  setItems((oldItems)=>{
    return oldItems.filter((arrElem,index)=>{
return index !==  id;
    })
  })
      }
  return (<>
    <div className="main_div">
   <div className='center_div'>
    <br/>
    <h1>Todo List</h1>
    <br/>
    <input type='text' placeholder='Add a items' value={inputList} onChange={itemEvent}/>
    <button onClick={listItem}>+</button>
    <ol>
      {items.map((itemval,index)=>{
      
    return   <Todolist key={index} id={index}
       text={itemval}
       onSelect={deleteItem}
       />
      })}
      </ol>
   </div>
    
    </div></>
  );
}

export default App;

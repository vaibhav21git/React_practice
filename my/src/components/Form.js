import React from 'react'
import './Form.css'
import {useState} from 'react'

function Form(props) {

const [entry , setentry] = useState({});

  function handlesubmit(event)
  {
    event.preventDefault();
     props.addon(entry);
     
  }

  function handleonchange1(event)
  {
    
     entry.name  = event.target.value;
     console.log(entry.name);
  }

  function handleonchange2(event)
  {
     entry.age = event.target.value;
     console.log(entry.age);
  }

  return (<>
    <form className='form1'>
      <div className='methods'>
       
       <div className='oneinput'>
      <label for  = "namy">Name</label>
      <input onChange = {handleonchange1}  type  = "text" name  = 'name' placeholder='Enter Your Name' id = "namy"/>
      </div>

      <div  className='oneinput'>
      <label for  = "agy">Age</label>
      <input onChange = {handleonchange2} type  = "number" name  = 'age' placeholder='Enter Your Age' id = "agy"/>
      </div>

      <button onClick = {handlesubmit}>Make an Entry</button>
      </div>
    </form>
  </>)
}

export default Form
import React from 'react'
import Form from './components/Form'
import Addedlist from './components/Addedlist'
import './components/App.css'
import {useState} from 'react';


function App() {

  const DUMMY_DATA =[
    {name : "vaibhav" , age : "22"},
    {name : "manu" , age : "24"},
    {name : "shanu" , age : "28"},
    {name : "tanu" , age : "87"},
    ];

    const [items,setitems] = useState(DUMMY_DATA);
    let curritem ;

   function handlesubmit(curritem)
   {
      setitems(previtems=>
      {
          return [...previtems,curritem];
      });
   }

  return (<>
     <div className='m1'>
    <div><Form  addon = {handlesubmit}/></div>
    <div><Addedlist entries = {items}/></div>
    </div>
  </> 
  )
}

export default App
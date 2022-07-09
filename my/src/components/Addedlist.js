import React from 'react'
import './Addedlist.css'
import Entry from './Entry'

function Addedlist(props) {

  console.log(props);

  const array = [];

  const arr  = props.entries;

  for(let  i  = 0 ;i<arr.length ; i++)
  {
     array.push({name : arr[i].name , age : arr[i].age  , key : Math.random()*100000})
  }


  return (<>
     <Entry  carray = {array}/>
  </>
  )
}

export default Addedlist
import React from 'react'
import './Entry.css'

function Entry(props) {
  return (
    <div className='entry-item'>
    {props.carray.map((obj)=>(
      <h3>hello i am {obj.name} and i am {obj.age} years old.</h3>
    ))}

    </div>
  )
}

export default Entry

// backtiks used when u want to execute javascript alog with HTML
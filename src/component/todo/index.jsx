import React from 'react'
import './style.css'
import {AiOutlineDelete} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import {AiOutlineEye} from 'react-icons/ai'

function Todo({title,status}) {
  return (
    <div className='todo-div'>
      <p>{title}</p>
      <div>{status}</div>
      <div >
        <AiOutlineDelete/>
        <AiOutlineEdit/>
        <AiOutlineEye/>
      </div>
    </div>
  )
}

export default Todo

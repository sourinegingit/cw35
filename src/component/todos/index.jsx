import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/fetures/todo-slice'
import Todo from '../todo'
import './style.css'
function Todos() {
  const dispatch=useDispatch()
  const todos=useSelector(state=>state.todoSlice.todos)

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])
  return (
    <div>
      <div className='top-div'>
        <p>Task</p>
        <p>Status</p>
        <p>Actions</p>
      </div>
      {
        todos.length>0? 
        todos.map(item=><Todo key={item.id} 
          title={item.title} status={item.completed}/>)
        :
        <p>'no matching item found'</p>
        
      }
     
    </div>
  )
}

export default Todos

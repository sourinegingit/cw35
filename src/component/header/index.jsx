import React from 'react'
import './style.css'
import  {AiOutlineMenu} from 'react-icons/ai'
import  {FaFilter} from 'react-icons/fa'
import  {BiMessageRoundedAdd} from 'react-icons/bi'

// import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <div className='div-left'>
      <AiOutlineMenu/>
<p>my todo task</p>
      </div>
      <div className='div-rigth'>
    <input type='text' placeholder='search'/>
    <FaFilter/>
    <BiMessageRoundedAdd/>
   
      </div>
    </div>
  )
}

export default Header

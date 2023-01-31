import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header>
    <h1 className='logo'>Choira</h1>
    <h2 className='heading'> fridayNightjam </h2>
    <select className='dropdown'>
    <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
    </select>

    <div className='btn'>
      <p>+Invite</p> 
    </div>
</header>



    </>
  )
}

export default Header

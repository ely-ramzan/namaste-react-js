import React, { useEffect, useState } from 'react'

function Header() {
  const [login,setLogin] = useState("Log in");

  function handleEvent () {
      setLogin(login === "Log in"? "Log out" : "Log in")
  }
  return (
    <div className='header'>
        <div className="logo">
          <img src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg" alt="img" className='logo-img' 
          style={{width:"150px"}}/>
        </div>
        <div className="navbar">
            <ul className="navbar-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li id="login-btn" onClick={handleEvent}> {login} </li>
            </ul>
        </div>
    </div>
  )
} 

export default Header
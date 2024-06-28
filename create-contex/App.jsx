import React from 'react'
import UserContextProvider from './Components/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Welcome to my app</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
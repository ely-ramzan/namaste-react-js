import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import "./App.css"

function App() {
  return (
    <div className='appLayout'>
      <Header />
      <Body />
    </div>
  )
}

export default App















/*

- Header:
  - logo
  - right- nav 

- Body
 - search 
 - filter 
 - cards_container
    - cards:
        - title: dish name
        - img
        - description
*/
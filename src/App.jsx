import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Order from './Components/Order/Order'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Services/>
      <Order/>
      <About/>
      
    </div>
  )
}

export default App

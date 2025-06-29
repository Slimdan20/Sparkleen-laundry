import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Order from './Components/Order/Order'
import Footer from './Components/Footer/Footer'
import Form from './Components/Form/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Success from './Components/Success/Success'


const App = () => {
  return (
    <div>
      <Router>
      
      <Routes>
        <Route path="/" element={
          <>
      <Navbar />
      <Home />
      <Services />
      <Order />
      <About />
      <Footer />
      </>
        } />
      <Route path="/form" element={<Form />} />
      <Route path="/success" element={<Success />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App

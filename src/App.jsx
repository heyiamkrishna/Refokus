import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'

function App() {


  return (
    <>
       <div className="app font-['Poppins'] text-white font-light w-full  bg-zinc-900   ">
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
      </div>

    </>
  )
}

export default App

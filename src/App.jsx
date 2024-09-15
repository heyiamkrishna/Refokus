import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {


  return (
    <>
       <div className="app font-['Poppins'] text-white font-light w-full h-screen bg-zinc-900   ">
        <Navbar/>
        <Work/>
      </div>

    </>
  )
}

export default App

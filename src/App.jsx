import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const [username, setusername] = useState('')
  const SubmitHandler=(e)=>{
    e.preventDefault()
    console.log("Submitted")
    setusername('')
  }
  return (
    <>
    <Navbar />
     <form onSubmit={(e)=>{
      SubmitHandler(e)
    }}>
      <input value={username} 
      onChange={(e)=>{
        setusername(e.target.value)
      }} className='border-2 px-5 py-3 m-5 text-xl rounded border-black' type="text" placeholder='Enter your username' />
      <button className='border-2 px-5 py-3 m-5 text-xl rounded border-black bg-green-500'>Submit</button>
    </form>
    <Footer />
    </>
  )
}

export default App
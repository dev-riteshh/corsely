import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate()
  return (
    <div className='container'>
        <h1 className='text-center'>Homepage</h1>
        <button onClick={()=>navigate('/signup')} className='p-3 text-lg font-medium rounded-lg m-auto block text-white bg-blue-700'>Get started</button>
    </div>
  )
}

export default Homepage
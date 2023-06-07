import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-100 to-blue-100' >
      <form action="" className='flex w-1/4 bg-slate-200 rounded-2xl border-white border p-10 flex-col gap-2' method="post">
        <div className='flex gap-2 flex-col'>
          <label htmlFor="">Full Name</label>
          <input className='p-2 rounded-md bg-white outline-none' type="text" />
        </div>
        <div className='flex gap-2 flex-col'>
          <label htmlFor="">Email</label>
          <input className='p-2 rounded-md bg-white outline-none' type="text" />
        </div>
        <div className='flex gap-2 flex-col'>
          <label htmlFor="">Password</label>
          <input className='p-2 rounded-md bg-white outline-none' type="password"  />
          <button></button>
        </div>
        <button onClick={()=>navigate('/admin/dashboard')} className='w-full p-2 mt-2 rounded-lg m-auto block text-white bg-blue-700'>Sign up</button>
      </form>
      
    </div>
  )
}

export default Signup
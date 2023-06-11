import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen justify-center items-center' >
      <form action="" className='flex w-1/4 bg-slate-200 rounded-2xl border-white border p-10 flex-col gap-2' method="post">
        <h1 className='text-lg text-center font-semibold mb-5'>Log in your Account</h1>
        <div className='flex gap-2 flex-col'>
          <label htmlFor="">Email</label>
          <input className='p-2 rounded-md bg-white outline-none' type="text" />
        </div>
        <div className='flex gap-2 flex-col'>
          <label htmlFor="">Password</label>
          <input className='p-2 rounded-md bg-white outline-none' type="password"  />
          <button></button>
        </div>
        <button className='w-full p-2 mt-2 rounded-lg m-auto block text-white bg-blue-700'>Log in</button>
      </form>
      
    </div>
  )
}

export default Login
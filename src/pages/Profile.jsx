import React from 'react'

const Profile = () => {
  return (
    <div className='h-[80vh] overflow-hidden overflow-y-scroll rounded-lg '>
      <h1 className='text-2xl font-semibold py-5'>Profile Information</h1>
      
      <div className='flex gap-2 h-screen p-8 rounded-lg bg-white flex-col'>
        <div className='flex gap-2 font-medium flex-col'>
          <label htmlFor="">Your name</label>
          <input className='p-2 outline-none rounded-md w-96 bg-slate-200' type="text" />
        </div>
        <div className='flex gap-2 font-medium flex-col'>
          <label htmlFor="">Your email</label>
          <input className='p-2 outline-none rounded-md w-96 bg-slate-200' type="text" />
        </div>
        <div className='flex gap-2 font-medium flex-col'>
          <label htmlFor="">Your password</label>
          <input className='p-2 outline-none rounded-md w-96 bg-slate-200' type="text" />
        </div>
        <button className='p-2 px-10 bg-blue-600 text-white rounded-md mt-5 self-start'>Save changes</button>
      </div>
    </div>
  )
}

export default Profile
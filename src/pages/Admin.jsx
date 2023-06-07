import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Admin = () => {
  return (
    <>
      <div className='container p-6'>
        <div className='flex'>
          <div className='flex'>
            <Sidebar />
          </div>
          <div className='flexflex-col gap-2 w-full'>
            <div className='p-4 justify-between items-center flex'>
              <h1 className='text-lg font-medium'>Dashboard/profile</h1>
              <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>John doe</p>
                <img src="" alt="" className='h-10 w-10 rounded-full bg-blue-600' />
              </div>
            </div>
            <div className='p-2'>
            <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Admin
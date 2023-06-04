import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Admin = () => {
  return (
    <>
      <div className='container p-6'>
        <div className='flex border'>
          <div className='flex'>
            <Sidebar />
          </div>
          <div className='flex flex-col gap-2 w-full'>
            <div className='p-5 border'>
              <p>Dashboard/profile</p>
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
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleCourse = () => {
  const navigate = useNavigate()
  return <>
    <div className='bg-white border h-fit p-5 rounded-lg'>
      <div className='h-40 rounded-md bg-slate-100 p-5'>Img Square</div>
      <div className='flex w-full justify-between items-center gap-5'>
        <div className='mt-2 overflow-hidden'>
        <h1 className='text-lg font-semibold truncate'>Facebook ads masterclass 2k23 for freelancers</h1>
        <p className='text-sm'>12 june 2023</p>
        </div>
        <button onClick={()=>navigate('/admin/courses/:id')} className='p-2 bg-blue-600 text-white rounded-md'>View</button>
      </div>
    </div>
  </>
}

const Courses = () => {
  const navigate = useNavigate()
  return (
    <div className='h-[82vh] overflow-hidden rounded-lg '>
      <div className='py-3 w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>All Courses</h1>
        <button onClick={()=>navigate('/admin/courses/new')} className='p-3 mr-5 bg-blue-600 text-white'>New Course</button>
      </div>
      <div className='p-8 overflow-y-auto grid grid-cols-3 rounded-lg h-[calc(82vh-3rem-4rem)] bg-white mt-2 gap-5'>
        <SingleCourse />
        <SingleCourse />
        <SingleCourse />
        <SingleCourse />
        <SingleCourse />
      </div>
    </div>
  )
}

export default Courses
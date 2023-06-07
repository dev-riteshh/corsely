import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-[80vh] overflow-hidden overflow-y-scroll rounded-lg '>
      <h1 className='text-2xl font-semibold py-5'>Dashboard Analytics</h1>

      <div className='grid grid-cols-3 gap-5'>
        <div className='bg-white gap-5 flex flex-col rounded-lg p-5 h-40'>
          <h1 className='text-2xl font-medium'>Total revenue</h1>
          <h1 className='text-6xl font-semibold'>100<span>$</span></h1>
        </div>

        <div className='bg-white gap-5 flex flex-col rounded-lg p-5 h-40'>
          <h1 className='text-2xl font-medium'>Total Enrollment</h1>
          <h1 className='text-6xl font-semibold'>120
           <span className='text-lg text-gray-400 font-medium ml-2'>students</span>
          </h1>
        </div>

        <div className='bg-white gap-5 flex flex-col rounded-lg p-5 h-40'>
          <h1 className='text-2xl font-medium'>Total page leads</h1>
          <h1 className='text-6xl font-semibold'>202
           <span className='text-lg text-gray-400 font-medium ml-2'>visits</span>
          </h1>
        </div>

        <div className='col-span-2 bg-white rounded-lg p-5'>block four</div>
        <div className='bg-white rounded-lg p-5'>Recent activity</div>
      </div>
    </div>
  )
}

export default Dashboard
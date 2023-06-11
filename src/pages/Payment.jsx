import React,{useState} from 'react'

const Payment = () => {

  return (
    <div className='h-[82vh] overflow-hidden  rounded-lg '>
      <h1 className='text-2xl font-semibold py-5'>Payment Gateway</h1>
      
      <div className='grid grid-cols-2 gap-5 h-[calc(82vh-3rem-4rem)] p-8 overflow-y-scroll rounded-lg bg-white'>
        <div className='input'>
          <label htmlFor="">Your name</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your Email address</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <div className='input'>
          <label htmlFor="">Your password</label>
          <input type="text" />
        </div>
        <button className='p-2 px-10 w-1/2 bg-blue-600 text-white rounded-md mt-5 self-start'>Save changes</button>
      </div>
    </div> 
  )
}

export default Payment


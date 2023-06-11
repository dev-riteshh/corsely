import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoursePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='h-[82vh] overflow-hidden rounded-lg '>
      <div className='py-3 w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Facebook ads course 2k23</h1>
        <button onClick={()=>navigate('/admin/courses/:id/edit')} className='p-3 mr-5 bg-blue-600 text-white'>Edit Course</button>
      </div>
      <div className='p-8 rounded-lg w-full overflow-hidden overflow-y-scroll h-[calc(82vh-3rem-4rem)] bg-white mt-2 gap-5'>
        <h1 className=' p-2 mb-2 text-xl font-medium'>Course overview</h1>
        <div className='flex w-full gap-5'>
          <div className='p-4 flex-1 rounded-lg  border'>
            <h1 className='text-lg'>students enrolled</h1>
            <h1 className='text-3xl mt-2'>100</h1>
          </div>
          <div className='p-4 flex-1 rounded-lg  border'>
            <h1 className='text-lg'>students enrolled</h1>
            <h1 className='text-3xl mt-2'>100</h1>
          </div>
          <div className='p-4 flex-1  rounded-lg border'>
            <h1 className='text-lg'>students enrolled</h1>
            <h1 className='text-3xl mt-2'>100</h1>
          </div>
          <div className='p-4 flex-1  rounded-lg border'>
            <h1 className='text-lg'>students enrolled</h1>
            <h1 className='text-3xl mt-2'>100</h1>
          </div>
        </div>

        <h1 className=' p-2 my-3 text-xl font-medium'>Student Enrolled</h1>

        <table className='w-full teb' align='center'>
          <thead>
            <tr className='bg-slate-200 '>
              <th className='py-3 border font-semibold border-b'>sr.no.</th>
              <th className='py-3 border font-semibold border-b'>Student Name</th>
              <th className='py-3 border font-semibold border-b'>Email</th>
              <th className='py-3 border font-semibold border-b'>password</th>
              <th className='py-3 border font-semibold border-b'>Enrolled date</th>
            </tr>
          </thead>
          <tbody>
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
           <Tablecontent />
          </tbody>
        </table>

      </div>
    </div>
    </>
  )
}


const Tablecontent = () => {
  return (
    <>
      <tr className="bg-white border-b">
        <td className="px-2 py-4">
          01
        </td>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          Akhiles vikas Mane
        </th>
        <td className="px-6 py-4">
          akhi@gmail.com
        </td>
        <td className="px-6 py-4">
          *********
        </td>
        <td className="px-6 py-4">
          22 june 2023
        </td>
      </tr>
    </>
  )
}
export default CoursePage
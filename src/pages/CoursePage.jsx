import React from 'react'
import { useNavigate } from 'react-router-dom'

const CoursePage = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='h-[82vh] overflow-hidden rounded-lg '>
      <div className='py-3 w-full flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Facebook ads course 2k23</h1>
        <button onClick={()=>navigate('/admin/courses/new')} className='p-3 mr-5 bg-blue-600 text-white'>Edit Course</button>
      </div>
      <div className='p-8 rounded-lg overflow-hidden overflow-y-scroll h-[calc(82vh-3rem-4rem)] bg-white mt-2 gap-5'>
        <h1 className='h-[100rem] p-2 border'>hello</h1>
      </div>
    </div>
    </>
  )
}


const Tablecontent = () => {
  return (
    <>
      <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          Akhiles Mane
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
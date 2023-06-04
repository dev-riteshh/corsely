import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";

const Sidebar = () => {
    return (
        <div className='w-[15rem] h-[93vh] border'>
            <div className='p-5'>
                <h1 className='text-blue-700 text-center text-2xl font-bold'>⚽Corsely</h1>
            </div>
            <div className='flex flex-col p-8'>

                <Link to={'/admin/dashboard'} className='flex gap-2 hover:bg-slate-200 rounded-md text-lg px-5 py-4 items-center'>
                    <HiOutlineChartBarSquare className='text-2xl' />
                    <h1>Dashboard</h1>
                </Link>


                <Link to={'/admin/courses'} className='flex gap-2 hover:bg-slate-200 rounded-md text-lg px-5 py-4 items-center'>
                    <HiOutlineBookOpen className='text-2xl' />
                    <h1>Courses</h1>
                </Link>


                <Link to={'/admin/payment'} className='flex gap-2 hover:bg-slate-200 rounded-md text-lg px-5 py-4  items-center'>
                    <HiOutlineCurrencyDollar className='text-2xl' />
                    <h1>Payments</h1>
                </Link>

                <Link to={'/admin/profile'} className='flex gap-2 hover:bg-slate-200 rounded-md text-lg px-5 py-4  items-center'>
                    <HiOutlineUserCircle className='text-2xl' />
                    <h1>Profile</h1>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar
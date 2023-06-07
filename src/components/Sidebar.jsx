import React from 'react'
import logo from '../assets/Corsely-logo.svg'
import { NavLink } from 'react-router-dom'
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";

const Sidebar = () => {
    return (
        <div className='w-[15rem] h-[93vh]'>
            <div className='p-[1rem] flex justify-center items-center'>
                <img src={logo} alt="logo" className=' w-36' />
            </div>
            <div className='flex flex-col p-8'>

                <NavLink to={'/admin/dashboard'} className='flex gap-2 rounded-md text-lg px-5 py-4 items-center'>
                    <HiOutlineChartBarSquare className='text-2xl' />
                    <h1>Dashboard</h1>
                </NavLink>


                <NavLink to={'/admin/courses'} className='flex gap-2  rounded-md text-lg px-5 py-4 items-center'>
                    <HiOutlineBookOpen className='text-2xl' />
                    <h1>Courses</h1>
                </NavLink>


                <NavLink to={'/admin/payment'} className='flex gap-2 rounded-md text-lg px-5 py-4  items-center'>
                    <HiOutlineCurrencyDollar className='text-2xl' />
                    <h1>Payments</h1>
                </NavLink>

                <NavLink to={'/admin/profile'} className='flex gap-2  rounded-md text-lg px-5 py-4  items-center'>
                    <HiOutlineUserCircle className='text-2xl' />
                    <h1>Profile</h1>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar
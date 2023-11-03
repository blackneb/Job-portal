'use client'
import React from 'react'
import { Input, Button, Menu, Avatar, Dropdown, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { user_authenticated } from '@/store/Actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useCookies } from "react-cookie"
import {
  UserOutlined,
  LogoutOutlined,
  FileAddOutlined,
  UploadOutlined,
  SolutionOutlined,
  SearchOutlined,
} from '@ant-design/icons';
const { Search } = Input;


const Navbar = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [cookie, setCookie, removeCookie] = useCookies(["userAccessKey"])
  const isAuth = useSelector((state:any) => state.userAuth)
  console.log(isAuth.isAuth)
  const logout = () => {
    const isauthjson = {
      isAuth:'False',
  }
    dispatch(user_authenticated(isauthjson))
    removeCookie("userAccessKey");
    window.location.reload();
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <Link href="/myjobs">
            <div className='flex flex-row'>
                <SolutionOutlined />
                <p className='ml-2'>My Jobs</p>
            </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/postajob">
            <div className='flex flex-row'>
                <SolutionOutlined />
                <p className='ml-2'>Post Job</p>
            </div>
        </Link>
      </Menu.Item>
      <Menu.Item>
          <Link href="/myapplications">
            <div className='flex flex-row'>
                <UserOutlined />
                <p className='ml-2'>Jobs Applied</p>
            </div>
          </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
          <Link href="/profile">
            <div className='flex flex-row'>
                <UserOutlined />
                <p className='ml-2'>Profile</p>
            </div>
          </Link>
      </Menu.Item>
      <Menu.Item>
          <Link href="/uploadresume">
            <div className='flex flex-row'>
                <UploadOutlined />
                <p className='ml-2'>Upload Resume</p>
            </div>
          </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
            <div className='flex flex-row' onClick={logout}>
                <LogoutOutlined />
                <p className='ml-2'>Logout</p>
            </div>
      </Menu.Item>
    </Menu>
  );
  
  return (
    
    <nav className="bg-white border-gray-200 dark:bg-gray-800 sticky top-0 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center shadow-md justify-between mx-auto p-4">
        <Link href="/">
          <div className='flex flex-row'>
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Job Portal</span>
          </div>
        </Link>
      <div className="flex md:order-2">
        {
          isAuth.isAuth === "True"?(
            <div>
              <Dropdown overlay={menu} trigger={['click']}>
                  <Avatar icon={<UserOutlined />} />
              </Dropdown>
             </div>) : (
             <div> 

             </div>)
        }
        
          <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>

      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <div>
          <Search
            placeholder="Enter title"
            allowClear
            enterButton={
              <Button type="primary" style={{ backgroundColor: 'blue', borderColor: 'blue' }}>
                Find a Job
              </Button>
            }
            size="large"
          />
        </div>
      </div>
      
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
          <li>
            <a href="#" className="block text-sm py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a href="#" className="block text-sm py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
          <li>
            <a href="#" className="block text-sm py-2 pl-3 pr-4 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
        </ul>
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
      {
          isAuth.isAuth === "True"?(
              <div>
              
              </div>) : (
              <div> 
              <Link href="/login">
                <button type="button" className="text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
              </Link>
              <Link href="/signup">
                <button type="button" className="ml-4 text-white text-sm bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
              </Link>
              </div>)
        }
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        
      </div>
      </div>
    </nav>

  )
}

export default Navbar

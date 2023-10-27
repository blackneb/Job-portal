"use client";
import React from 'react'
import { useState } from 'react';
import { Dropdown, Menu, Avatar, Input, Button } from 'antd';

const { Search } = Input;

import {
  UserOutlined,
  LogoutOutlined,
  FileAddOutlined,
  UploadOutlined,
  SolutionOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const Navbar = () => {
    const handleSearch = (value:any) => {
        // Handle search logic here
        console.log('Search query:', value);
      };

    const menu = (
        <Menu>
          <Menu.Item>
            <a href="/my-jobs">
                <div className='flex flex-row'>
                    <SolutionOutlined />
                    <p className='ml-2'>My Jobs</p>
                </div>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/jobs-applied">
                <div className='flex flex-row'>
                    <UserOutlined />
                    <p className='ml-2'>Jobs Applied</p>
                </div>
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <a href="/profile">
                <div className='flex flex-row'>
                    <UserOutlined />
                    <p className='ml-2'>Profile</p>
                </div>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="/upload-resume">
                <div className='flex flex-row'>
                    <UploadOutlined />
                    <p className='ml-2'>Upload Resume</p>
                </div>
            </a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item>
            <a href="/logout">
                <div className='flex flex-row'>
                    <LogoutOutlined />
                    <p className='ml-2'>Logout</p>
                </div>
            </a>
          </Menu.Item>
        </Menu>
      );
  return (
    <header>
    <nav className="bg-white font-mono border-gray-200 border-2 shadow-md px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">Job Portal</span>
            </a>
            <div className="flex items-center lg:order-2">
                <a href="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Log in</a>
                <a href="#" className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none ">Register</a>
                <div>
                <Dropdown overlay={menu} trigger={['click']}>
                        <Avatar icon={<UserOutlined />} />
                </Dropdown>
            </div>
                <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <Search
                placeholder="Enter title"
                style={{ width: 300 }}
                enterButton={
                    <Button type="primary" style={{ backgroundColor: 'blue', borderColor: 'blue' }}>
                    Search
                    </Button>
                }
                onSearch={(value) => console.log(value)}
            />
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Jobs</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar

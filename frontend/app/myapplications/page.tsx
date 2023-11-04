'use client'
import React, { useState, useEffect } from 'react'
import { Space, Table, Tag, notification } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios, { AxiosError } from 'axios';
import { useCookies } from "react-cookie"
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';


type Job = {
    user: number;
    resume: string;
    appliedat: string;
    job: {
      id: number;
      title: string;
      description: string;
      email: string;
      address: string;
      jobtype: string;
      education: string;
      industry: string;
      experience: string;
      salary: number;
      positions: number;
      company: string;
      lastdate: string;
      createdat: string;
      user: number;
    };
  };

const page = () => {
    const columns: ColumnsType<Job> = [
        {
          title: 'Title',
          dataIndex: ['job', 'title'],
        },
        {
          title: 'Type',
          dataIndex: ['job', 'jobType'],
        },
        {
          title: 'Industry',
          dataIndex: ['job', 'industry'],
        },
        {
          title: 'Experience',
          dataIndex: ['job', 'experience'],
        },
        {
          title: 'Company',
          dataIndex: ['job', 'company'],
        },
      ];
    const url = "http://127.0.0.1:8000/api/me/jobs/applied/"
    const [cookie, setCookie] = useCookies(["userAccessKey"])
    const [data, setData] = useState([])
    async function getData(){
        try{
        const response = await axios.get(url,{
            headers: {
                Authorization: `Bearer ${cookie.userAccessKey}`,
                'Content-Type': 'application/json',
            },
            })
            console.log(response.data)
            setData(response.data)
    }
    catch(error:any){
        console.log(error.response)
        notification.error({
            message: error.response.data.error,
            duration: 5,
            onClose: () => {
                console.log('Notification closed');
            },
            });
    }
    }
    useEffect(() => {
        getData()
    }, [])
  return (
    <div className='flex flex justify-center min-h-screen'>
      <div>
      
        {
          data.length === 0? (
          <>
            <Loading/>
          </>
          ):(
          <>
            < div className="shadow-md rounded ml-4 my-4 mb-8">
              <p className="ml-4 font-semibold">My Jobs</p>
            </div>
            <Table columns={columns} dataSource={data} />;
          </>
          )
        }
      </div>
    </div>
  )
}

export default page

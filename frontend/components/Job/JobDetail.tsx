'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { Button, Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd';
import axios from 'axios';
import { useCookies } from "react-cookie"

interface jobInterface {
    id: number;
    title:string
    description:string;
    email:string;
    address:string;
    jobType:string;
    education:string;
    industry:string;
    experience:string;
    salary:number;
    positions:number;
    company:string;
    lastDate:string;
    createdAt:string;
    user:number;
}

const JobDetail = ({id}:any) => {
    const [cookie, setCookie] = useCookies(["userAccessKey"])
    const [data, setData] = useState<jobInterface>()
    const [items, setItems] = useState<DescriptionsProps['items']>([])
    const [more, setMore] = useState<DescriptionsProps['items']>([])
    const [loading, setLoading] = useState(true)
    async function getJobDetails(){
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/jobs/${id}`,{
                    headers: {
                      Authorization: `Bearer ${cookie.userAccessKey}`,
                      'Content-Type': 'application/json',
                    },
                  })
            const formoreitems = [
                {
                  key: '1',
                  label: 'Email Address',
                  span: 3,
                  children: response.data.email,
                },
                {
                  key: '2',
                  label: 'Job Posted',
                  span: 3,
                  children: response.data.createdAt,
                },
                {
                  key: '3',
                  label: 'Last Date',
                  span: 3,
                  children: response.data.lastDate,
                },
            ]
            const forsetitems = [
                {
                  key: '1',
                  label: 'Job Type',
                  span: 3,
                  children: response.data.jobType,
                },
                {
                  key: '2',
                  label: 'Industry',
                  span: 3,
                  children: response.data.industry,
                },
                {
                  key: '3',
                  label: 'Expected Salary',
                  span: 3,
                  children: response.data.salary,
                },
                {
                    key: '4',
                    label: 'Education',
                    span: 3,
                    children: response.data.education,
                },
                {
                    key: '5',
                    label: 'Experience',
                    span: 3,
                    children: response.data.experience,
                },
                {
                    key: '6',
                    label: 'Company',
                    span: 3,
                    children: response.data.company,
                },
            ]
            setMore(formoreitems)
            setItems(forsetitems)
            console.log(response.data)
            setData(response.data)
            setLoading(false)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getJobDetails()
    }, [])
  return (
    <div className='flex flex-row mt-4'>
        {
            loading? (
            <>
                Loading...
            </>
            ):(
            <>
            <div>
                <div className="w-[48rem] rounded overflow-hidden shadow-lg bg-white m-4">
                    <div className="px-6 py-4">
                        <div className="mb-2 flex flex-row">
                        <Image src="/tag.png" alt="Icon" width={20} height={10} />
                        <p className='ml-2 text-lg'>{data?.title}</p>
                    </div>
                    <div className="mb-2 flex flex-row">
                        <Image src="/company.png" alt="Icon" width={20} height={10} />
                        <p className='ml-2 text-gray-500'>{data?.company}</p>
                    </div>  
                    <div className="mb-2 flex flex-row">
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }} 
                        >
                        Apply
                        </Button>
                        <p className='ml-12 mt-2'>Number of Candidates Apply : 5</p>
                    </div>
                    </div>
                    
                </div>
                <div className='ml-4'>
                    <p>Job Description </p>
                    <p className='w-[48rem] text-justify text-gray-600 text-sm'>{data?.description}</p>
                </div>
                <div className='ml-4 mt-4'>
                    <Descriptions title="Job Summary" bordered items={items} />
                </div>
            </div>
            <div>
                <div className='ml-4'>
                    <Descriptions title="More Details" bordered items={more} />
                </div>
            </div>
            </>
            )
        }
    </div>
  )
}

export default JobDetail

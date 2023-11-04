'use client'
import React, { useState, useEffect } from 'react'
import { Space, Table, Tag, notification, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import axios, { AxiosError } from 'axios';
import { useCookies } from "react-cookie"
import Image from 'next/image';
import Link from 'next/link';
import { ExclamationCircleFilled } from '@ant-design/icons';


const { confirm } = Modal;


interface DataType {
  key: string;
  id: number;
  title:string;
  type:string;
  education:string;
  industry:string;
  experience:number;
  company:string;
}

const page = () => {
  const url = "http://127.0.0.1:8000/api/me/jobs"
  const [cookie, setCookie] = useCookies(["userAccessKey"])
  const [data, setData] = useState([])
  async function deleteJob(id:any) {
    confirm({
      title: `Are you sure delete Job ${id}?`,
      icon: <ExclamationCircleFilled />,
      content: 'Delete Full Content',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      async onOk() {
        try{
          const response = await axios.delete(`http://127.0.0.1:8000/api/deletejob/${id}/`,{
            headers: {
              Authorization: `Bearer ${cookie.userAccessKey}`,
              'Content-Type': 'application/json',
            },
          })
          console.log(response.data)
          notification.success({
            message: "Job Deleted",
            duration: 5,
            onClose: () => {
              console.log('Notification closed');
            },
          });
        }
        catch(error:any){
          notification.error({
            message: error.response.data.message,
            duration: 5,
            onClose: () => {
              console.log('Notification closed');
            },
          });
        }
      },
      onCancel() {
        console.log('Cancel');
      },
    });
    console.log("deleting job " + id)
  }
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
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Education',
      dataIndex: 'education',
      key: 'education',
    },
    {
      title: 'Industry',
      dataIndex: 'industry',
      key: 'industry',
    },
    {
      title: 'Experience',
      dataIndex: 'experience',
      key: 'experience',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_:any, record:any) => (
        <Space size="middle">
          <Link href={`/jobdetails/${record.id}`}>
            <Image src="/see.png" alt="Icon" width={20} height={10} />
          </Link>
          <Link href={`/updatejob/${record.id}`}>
            <Image src="/update.png" alt="Icon" width={20} height={10} />
          </Link>
          <Image src="/delete.png" alt="Icon" width={20} height={10} onClick={()=>deleteJob(record.id)} />
        </Space>
      ),
    },
  ];
  return (
    <div className='flex flex justify-center min-h-screen'>
      <div>
      < div className="shadow-md rounded ml-4 my-4 mb-8">
          <p className="ml-4 font-semibold">My Jobs</p>
        </div>
        {
          data.length === 0? (
          <>
            Loading...
          </>
          ):(
          <>
            <Table<DataType>
              dataSource={data}
              columns={columns}
            />
          </>
          )
        }
      </div>
    </div>
  )
}

export default page

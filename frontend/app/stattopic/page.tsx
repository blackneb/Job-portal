'use client'
import { Form, Input, Button, Descriptions, notification } from 'antd'
import React, { useState, useEffect } from 'react'
import { LineChartOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useCookies } from "react-cookie"
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Profile from '@/components/Profile'

interface dataInterface {
    avg_positions: number;
    total_jobs:number;
    min_salary:number;
    max_salary:number;
    avg_salary:number;
}

const page = () => {
    const [loading, setLoading] = useState(false)
    const [data, setdata] = useState<dataInterface>()
    const [cookie, setCookie] = useCookies(["userAccessKey"])
    const router = useRouter()
  const isAuth = useSelector((state:any) => state.userAuth)
    const onFinish = async (values:any) => {
        setLoading(true)
        console.log(values)
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/stats/${values.topic}/`,{
                headers: {
                  Authorization: `Bearer ${cookie.userAccessKey}`,
                  'Content-Type': 'application/json',
                },
              })
            console.log(response.data)
            if (response.data.message){
                notification.info({
                    message: response.data.message,
                    duration: 5,
                    onClose: () => {
                      console.log('Notification closed');
                    },
                  });
                  setdata(response.data)
            }
            else{
                setdata(response.data)
            }
        }
        catch(error){

        }
        setLoading(false)
    }
  useEffect(() => {
    if (!isAuth.isAuth){
      router.push('/login')
    }
  }, [])
  return (
    <div>
        <div className='flex justify-center'>
            <div className='flex m-4 w-[48rem] h-[32rem] shadow-md rounded'>
                <div className='flex flex-col justify-center items-center pl-4'>
                    <p className='text-gray-600 font-semibold'>Get Topic Status</p>
                    <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="topic"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input topic!' }]}
                    >
                        <Input prefix={<LineChartOutlined />} placeholder="Topic" />
                    </Form.Item>
                    
                    <Form.Item className='flex justify-center'>
                    {loading ? (
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }}
                            loading>
                        Getting Status
                        </Button>
                    ) : (
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }} 
                        >
                        Get Status
                        </Button>
                    )}
                    </Form.Item>
                </Form>
                </div>
                <div className='ml-8 flex flex-col items-center justify-center'>
                    <Descriptions title="Statistics" bordered>
                        <Descriptions.Item label="Average Position" span={3} >{data?.avg_positions}</Descriptions.Item>
                        <Descriptions.Item label="Total Job" span={3}>{data?.total_jobs}</Descriptions.Item>
                        <Descriptions.Item label="Min. Salary" span={3}>{data?.min_salary}</Descriptions.Item>
                        <Descriptions.Item label="Max. Salary" span={3}>{data?.max_salary}</Descriptions.Item>
                        <Descriptions.Item label="Average Salary" span={3}>{data?.avg_salary}</Descriptions.Item>
                    </Descriptions>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page

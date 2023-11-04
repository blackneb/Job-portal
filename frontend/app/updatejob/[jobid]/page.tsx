'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import { Descriptions, Form, Input, Button, Select, DatePicker, notification } from 'antd'
import type { DescriptionsProps } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios, { AxiosError } from 'axios';
import { useCookies } from "react-cookie"

const { TextArea } = Input


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

const page = ({params}:any) => {
    const [cookie, setCookie] = useCookies(["userAccessKey"])
    const [data, setData] = useState<any>([])
    const [items, setItems] = useState<DescriptionsProps['items']>([])
    const [more, setMore] = useState<DescriptionsProps['items']>([])
    const [loading, setLoading] = useState(false)
    const updateurl = ''
  async function getJobDetails(){
      console.log(cookie.userAccessKey)
      try{
          const response = await axios.get(`http://127.0.0.1:8000/api/jobs/${params.jobid}`,{
                  headers: {
                    Authorization: `Bearer ${cookie.userAccessKey}`,
                    'Content-Type': 'application/json',
                  },
                })
          console.log(response.data)
          setData(response.data)
          setLoading(false)
      }
      catch(error){
          console.log(error)
      }
  }
  const onFinish = async (values:any) => {
    setLoading(true)
    console.log('Received values of form: ', values);
    try{
      const response = await axios.put(`http://127.0.0.1:8000/api/updatejob/${params.jobid}/`, values,{
        headers: {
          Authorization: `Bearer ${cookie.userAccessKey}`,
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      notification.success({
        message: "Updated Success fully",
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
    setLoading(false)
  }
  useEffect(() => {
      getJobDetails()
  }, [])
  return (
    <div>
      {
        data.length === 0? (
        <>
        Loading..
        </>
        ):(
        <>
        <section className="h-screen flex align-center items-center justify-center">
          <div className="container w-3/4 px-6 py-24 ">
              <div className="flex h-3/4 items-center shadow-xl justify-center">

              <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
                  <div className=' text-3xl font-bold flex justify-center mb-10'>
                      <h1>Update Job</h1>
                  </div>
                  <div className='flex justify-evenly'>
                      <Form
                          name="login-form"
                          className="login-form"
                          initialValues={{ remember: true }}
                          onFinish={onFinish}
                          >
                          
                          <div className='flex flex-row'>
                              <div className=''>
                                  <Form.Item
                                      name="title"
                                      style={{ width: 300 }}
                                      initialValue={data?.title}
                                      rules={[{ required: true, message: 'Please input Job title!' }]}
                                  >
                                      <Input prefix={<UserOutlined />} placeholder="Job Title" />
                                  </Form.Item>

                                  <Form.Item
                                      name="description"
                                      style={{ width: 300 }}
                                      initialValue={data?.description}
                                      rules={[{ required: true, message: 'Please input Job description!' }]}
                                  >
                                      <TextArea placeholder="Job Description" />
                                  </Form.Item>

                                  <Form.Item
                                      name="email"
                                      style={{ width: 300 }}
                                      initialValue={data?.email}
                                      rules={[{ required: true, message: 'Please input your Email!' }]}
                                  >
                                      <Input prefix={<UserOutlined />} placeholder="Email" />
                                  </Form.Item>

                                  <Form.Item
                                      name="address"
                                      style={{ width: 300 }}
                                      initialValue={data?.address}
                                      rules={[{ required: true, message: 'Please input Address!' }]}
                                  >
                                      <Input prefix={<UserOutlined />} placeholder="Address" />
                                  </Form.Item>

                                  <Form.Item
                                      name="salary"
                                      style={{ width: 300 }}
                                      initialValue={data?.salary}
                                      rules={[{ required: true, message: 'Please input Salary!' }]}
                                  >
                                      <Input prefix={<UserOutlined />} placeholder="Salary" />
                                  </Form.Item>

                                  <Form.Item
                                      name="positions"
                                      style={{ width: 300 }}
                                      initialValue={data?.positions}
                                      rules={[{ required: true, message: 'Please input Position!' }]}
                                  >
                                      <Input prefix={<UserOutlined />} placeholder="Number of Position" />
                                  </Form.Item>

                                  <Form.Item
                                      name="company"
                                      initialValue={data?.company}
                                      style={{ width: 300 }}
                                      rules={[{ required: true, message: 'Please input your company name!' }]}
                                  >
                                      <Input prefix={<UserOutlined />} placeholder="Company Name" />
                                  </Form.Item>
                              </div>

                              <div className='ml-20'>
                                  <Form.Item 
                                      name="jobType" 
                                      style={{ width: 300 }} 
                                      initialValue={data?.jobType}
                                      label="Job Types"
                                      rules={[{ required: true, message: 'Please Select Job Type!' }]}
                                      >
                                      <Select>
                                          <Select.Option value="Permanent">Permanent</Select.Option>
                                          <Select.Option value="Temporary">Temporary</Select.Option>
                                          <Select.Option value="Internship">Internship</Select.Option>
                                      </Select>
                                  </Form.Item>

                                  <Form.Item 
                                      name="education" 
                                      style={{ width: 300 }} 
                                      initialValue={data?.education}
                                      label="Education"
                                      rules={[{ required: true, message: 'Please Select Education!' }]}
                                      >
                                      <Select>
                                          <Select.Option value="Bachelors">Bachelors</Select.Option>
                                          <Select.Option value="Masters">Masters</Select.Option>
                                          <Select.Option value="Phd">Phd</Select.Option>
                                      </Select>
                                  </Form.Item>

                                  <Form.Item 
                                      name="industry" 
                                      style={{ width: 300 }}
                                      initialValue={data?.industry}
                                      label="Industry"
                                      rules={[{ required: true, message: 'Please Select Industry' }]}
                                      >
                                      <Select>
                                          <Select.Option value="Bussiness">Bussiness</Select.Option>
                                          <Select.Option value="IT">IT</Select.Option>
                                          <Select.Option value="Banking">Banking</Select.Option>
                                          <Select.Option value="Education">Education</Select.Option>
                                          <Select.Option value="Telecommunication">Telecommunication</Select.Option>
                                          <Select.Option value="Others">Others</Select.Option>
                                      </Select>
                                  </Form.Item>

                                  <Form.Item 
                                      name="experience" 
                                      style={{ width: 300 }} 
                                      initialValue={data?.experience}
                                      label="Experience"
                                      rules={[{ required: true, message: 'Please Select Experience!' }]}
                                      >
                                      <Select>
                                          <Select.Option value="NO_EXPERIENCE">NO EXPERIENCE</Select.Option>
                                          <Select.Option value="ONE_YEAR">ONE YEAR</Select.Option>
                                          <Select.Option value="TWO_YEAR">TWO YEAR</Select.Option>
                                          <Select.Option value="THREE_YEAR_PLUS">THREE YEAR PLUS</Select.Option>
                                      </Select>
                                  </Form.Item>
                                  
                              </div>

                          </div>  
                          <Form.Item className='flex justify-center'>
                          {loading ? (
                          <Button 
                              type="primary" 
                              htmlType="submit"
                              className="login-form-button"
                              style={{backgroundColor:'blue', color:'white' }}
                              loading>
                              updating
                              </Button>
                          ) : (
                              <Button 
                                  type="primary" 
                                  htmlType="submit"
                                  className="login-form-button"
                                  style={{backgroundColor:'blue', color:'white' }} 
                              >
                              update
                              </Button>
                          )}
                          </Form.Item>
                      </Form>
                  </div>            
              </div>
              </div>
          </div>
          </section>
        </>
        )
      }
    </div>
  )
}

export default page

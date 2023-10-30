"use client";
import React from 'react'
import { Form, Input, Button, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
const { TextArea } = Input
const PostAJob = () => {
    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
      };
  return (
    <section className="h-screen flex align-center items-center justify-center">
    <div className="container w-3/4 px-6 py-24 ">
        <div className="flex h-3/4 items-center shadow-xl justify-center">

        <div className="md:w-8/12 lg:ml-6 lg:w-5/12 ">
            <div className=' text-3xl font-bold flex justify-center mb-10'>
                <h1>Post New Job</h1>
            </div>
            <div className='flex justify-evenly'>
                <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    >
                    
                    <div className='flex flex-row'>
                        <div className=''>
                            <Form.Item
                                name="jobtitle"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Job Title" />
                            </Form.Item>

                            <Form.Item
                                name="jobdescription"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <TextArea placeholder="Job Description" />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Email" />
                            </Form.Item>

                            <Form.Item
                                name="address"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Address" />
                            </Form.Item>

                            <Form.Item
                                name="salary"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Salary" />
                            </Form.Item>

                            <Form.Item
                                name="position"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Number of Position" />
                            </Form.Item>

                            <Form.Item
                                name="companyname"
                                style={{ width: 300 }}
                                rules={[{ required: true, message: 'Please input your first name!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="Company Name" />
                            </Form.Item>
                        </div>

                        <div className='ml-20'>
                            <Form.Item name="jobtypes" style={{ width: 300 }} label="Job Types">
                                <Select>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                                <Select.Option value="option3">Option 3</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="education" style={{ width: 300 }} label="Education">
                                <Select>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                                <Select.Option value="option3">Option 3</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="industry" style={{ width: 300 }} label="Industry">
                                <Select>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                                <Select.Option value="option3">Option 3</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item name="experience" style={{ width: 300 }} label="Experience">
                                <Select>
                                <Select.Option value="option1">Option 1</Select.Option>
                                <Select.Option value="option2">Option 2</Select.Option>
                                <Select.Option value="option3">Option 3</Select.Option>
                                </Select>
                            </Form.Item>
                            
                        </div>

                    </div>

                    
                    


                    

                    
                    
                    <Form.Item className='flex justify-center'>
                        <Button
                        htmlType="submit"
                        className="login-form-button"
                        >
                        Post
                        </Button>
                    </Form.Item>
                </Form>
            </div>            
        </div>
        </div>
    </div>
    </section>
  )
}

export default PostAJob

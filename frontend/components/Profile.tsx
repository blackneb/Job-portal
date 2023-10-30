"use client";
import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'; 

const Profile = () => {
    const onFinish = (values:any) => {
        console.log('Received values of form: ', values);
      };
    const userProfile = useSelector((state:any) => state.userProfile)
  return (
    <section className="h-screen flex align-center items-center justify-center">
    <div className="container w-3/4 px-6 py-24 ">
        <div className="g-6 flex h-3/4 flex-wrap items-center shadow-xl justify-center lg:justify-between">
        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 shadow-xl">
            <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image" />
        </div>


        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <div className=' text-3xl font-bold flex justify-center mb-10'>
                <h1>Profile</h1>
            </div>
            <div className='flex justify-center'>
                <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="firstname"
                        style={{ width: 300 }}
                        initialValue={userProfile.first_name}
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="first name" />
                    </Form.Item>

                    <Form.Item
                        name="lastname"
                        style={{ width: 300 }}
                        initialValue={userProfile.last_name}
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Last name" />
                    </Form.Item>

                    <Form.Item
                        initialValue={userProfile.email}
                        name="email"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
                    </Form.Item>
                
                    <Form.Item className='flex justify-center'>
                        <Button
                        htmlType="submit"
                        className="login-form-button"
                        >
                        Update
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

export default Profile

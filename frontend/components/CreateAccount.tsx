"use client";
import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import axios from 'axios';

const CreateAccount = () => {
    const [loading, setLoading] = useState(false);
    const onFinish = async (values:any) => {
        setLoading(true)
        console.log('Received values of form: ', values);
        if( values.password != values.confirmpassword){
            notification.error({
                message: 'Passwords must be same!',
                duration: 5,
                onClose: () => {
                  console.log('Notification closed');
                },
              });
        }
        else{
            try{
                const response = await axios.post("http://127.0.0.1:8000/api/register/",values)
                console.log(response.data)
                if (response.data.error === "User already exists"){
                    notification.error({
                        message: 'User Already Exists!',
                        duration: 5,
                        onClose: () => {
                          console.log('Notification closed');
                        },
                      });
                }
            }
            catch(error){
                notification.error({
                    message: 'Failed to Create Account!',
                    duration: 5,
                    onClose: () => {
                      console.log('Notification closed');
                    },
                  });
            }
        }
        setLoading(false)
      };
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
                <h1>Sign Up</h1>
            </div>
            <div className='flex justify-center'>
                <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="first_name"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="first name" />
                    </Form.Item>

                    <Form.Item
                        name="last_name"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Last name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input prefix={<MailOutlined />} type="email" placeholder="Email" />
                    </Form.Item>
                    
                    <Form.Item
                        name="password"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirmpassword"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                        prefix={<LockOutlined />}
                        type="password"
                        placeholder="Confirm Password"
                        />
                    </Form.Item>
                    
                    <Form.Item className='flex justify-center'>
                    {loading ? (
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }}
                            loading>
                        Signing up
                        </Button>
                    ) : (
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }} 
                        >
                        Sign Up
                        </Button>
                    )}
                    </Form.Item>
                </Form>
            </div>            
        </div>
        </div>
    </div>
    </section>
  )
}

export default CreateAccount

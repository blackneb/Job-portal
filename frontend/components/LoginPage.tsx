"use client";
import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { user_profile } from '@/store/Actions';
const LoginPage = () => {
    const dispatch = useDispatch()
    const onFinish = async (values:any) => {
        console.log('Received values of form: ', values);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', values);
            console.log('Access token: ',response.data.access);
            try{
                const res = await axios.get('http://127.0.0.1:8000/api/me/',{
                    headers: {
                      Authorization: `Bearer ${response.data.access}`,
                      'Content-Type': 'application/json',
                    },
                  })
                console.log(res.data)
                dispatch(user_profile(res.data))
            }
            catch(error){
                console.log("unable to login")
            }
          } catch (error) {
            console.log("Unable to login");
          }
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
                <h1>Log In</h1>
            </div>
            <div className='flex justify-center'>
                <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
                    <Form.Item
                        name="username"
                        style={{ width: 300 }}
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
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
                    
                    <Form.Item className='flex justify-center'>
                        <Button
                        htmlType="submit"
                        className="login-form-button"
                        style={{backgroundColor:'blue', color:'white' }}
                        >
                        Log in
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

export default LoginPage

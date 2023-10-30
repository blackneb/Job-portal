"use client";
import React from 'react'
import { Form, Input, Button, Upload } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';


const UploadResume = () => {
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
                <h1>Upload Resume</h1>
            </div>
            <div className='flex justify-center'>
                <Form
                    name="login-form"
                    className="login-form"
                    initialValues={{ remember: true }}
                    >

                    <Form.Item name="file" label="File">
                        <Upload>
                            <Button icon={<UploadOutlined />} size="small">
                            Upload
                            </Button>
                        </Upload>
                    </Form.Item>
                    
                    <Form.Item className='flex justify-center'>
                        <Button
                        htmlType="submit"
                        className="login-form-button"
                        >
                        Upload
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

export default UploadResume

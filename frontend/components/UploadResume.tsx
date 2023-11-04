"use client";
import React, { useState } from 'react'
import { Form, Input, Button, Upload, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { useCookies } from "react-cookie"
import type { UploadProps } from 'antd';
import axios from 'axios';


const UploadResume = () => {
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [cookie, setCookie] = useCookies(["userAccessKey"])
     const handleUpload = async () => {
      setLoading(true)
       const formData = new FormData();
       fileList.forEach((file) => {
         formData.append('resume', file);
       });

       try {
         const response = await axios.put('http://127.0.0.1:8000/api/me/upload/resume/', formData, {
           headers: {
             Authorization:`Bearer ${cookie.userAccessKey}`,
             'Content-Type': 'multipart/form-data',
           },
         });
         message.success('File upload Success.');

         // Handle the response as required
         console.log(response.data);
       } catch (error) {
         message.error('File upload failed. Please try again.');
       }
       setLoading(false)
     };

     const handleChange = ({ file, fileList }:any) => {
       setFileList(fileList);
     };
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
            <div className='flex flex-col items-center justify-center'>
            <Upload
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false}
            >
            <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
            <div className='my-4'>
            {loading ? (
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }}
                            loading>
                        Uploading Resume
                        </Button>
                    ) : (
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            className="login-form-button"
                            style={{backgroundColor:'blue', color:'white' }} 
                            onClick={handleUpload}
                        >
                        Upload Resume
                        </Button>
                    )}
            </div>
            </div>            
        </div>
        </div>
    </div>
    </section>
  )
}

export default UploadResume

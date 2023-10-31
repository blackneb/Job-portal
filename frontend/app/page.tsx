"use client"
import React, { useState,useEffect } from "react"
import JobCard from "@/components/Job/JobCard"
import axios from "axios"
import { Divider } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
export default function Home() {
  const [data, setData] = useState([]);
  const onChangeType = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Types = ', checkedValues);
  };
  const onChangeEducation = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Education = ', checkedValues);
  };
  const onChangeTypeExperience = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Experience = ', checkedValues);
  };
  const onChangeTypeSalary = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Salary = ', checkedValues);
  };
  async function getJobs(){
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/alljobs/")
      console.log(response.data)
      setData(response.data)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getJobs()
  }, [])
  return (
    <div className="flex flex-row justify-evenly">
      <div>
      <div className='w-48 flex flex-col justify-center'>
      <p className='text-lg item-center'>Filters</p>
      <Divider />
      <div>
        <p className='text-md item-center font-semibold'>Job Type</p>
            <Checkbox.Group name='type' style={{ width: '48' }} onChange={onChangeType}>
                <Checkbox value="Permanent">Permanent</Checkbox>
                <Checkbox value="Temporary">Temporary</Checkbox>
                <Checkbox value="Internship">Internship</Checkbox>
            </Checkbox.Group>
      </div>
      <Divider />
      <div>
        <p className='text-md font-semibold'>Education</p>
            <Checkbox.Group name='education' style={{ width: '20px' }} onChange={onChangeEducation}>
                <Checkbox value="Bachelors">Bachelors</Checkbox>
                <Checkbox value="Masters">Masters</Checkbox>
                <Checkbox value="Phd">Phd</Checkbox>
            </Checkbox.Group>
      </div>
      <Divider />
      <div>
        <p className='text-md justify-center font-semibold'>Experience</p>
            <Checkbox.Group name='experience' style={{ width: '140px' }} onChange={onChangeTypeExperience}>
                <Checkbox value="0">No Experience</Checkbox>
                <Checkbox value="1">1 Years</Checkbox>
                <Checkbox value="2">2 Years</Checkbox>
                <Checkbox value="3">3 Years +</Checkbox>
            </Checkbox.Group>
      </div>
      <Divider />
      <div>
        <p className='text-md item-center font-semibold'>Salary range</p>
            <Checkbox.Group name='salary' style={{ width: '100%'}} onChange={onChangeTypeSalary}>
                <Checkbox value="first">$1 - $50,000</Checkbox>
                <Checkbox value="second">$50,000 - $100,000</Checkbox>
                <Checkbox value="third">$100,000 - $200,000</Checkbox>
                <Checkbox value="fourth">$200,000+</Checkbox>
            </Checkbox.Group>
      </div>
    </div>
      </div>
    {
      data.length === 0? (
      <>
        Loading...
      </>
      ) : (
      <div>
        <div className="shadow-md rounded ml-4 my-4">
          <p className="ml-4 font-semibold">Latest Jobs</p>
        </div>
        <div className="flex flex-col mt-4 justify-center h-screen scrollbar-thin scrollbar-thumb-black scrollbar-track-White overflow-y-scroll hover:scrollbar-thumb-black">
        <div className="mt-4">
          {
            data.map((job:any) => (
              <JobCard
                  key={job.id}
                  companyName={job.company}
                  jobTitle={job.title}
                  description={job.description}
                  industry={job.industry}
                  type={job.jobType}
                  salary={job.salary}
                  expireDate={job.lastDate}
              />
            ))
          }
        </div> 
      </div>
      </div>
      )
    }
    <div className="flex w-36">

    </div>
      
    </div>
  )
}

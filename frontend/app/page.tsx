"use client"
import React, { useState,useEffect } from "react"
import JobCard from "@/components/Job/JobCard"
import axios from "axios"
import { Divider } from 'antd';
import { Checkbox, Col, Row } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import Image from 'next/image'
import { useCookies } from "react-cookie"
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation'
import { user_profile, user_authenticated } from '@/store/Actions';
import Loading from "@/components/Loading";





export default function Home() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const router = useRouter()
  const [cookie, setCookie] = useCookies(["userAccessKey"])
  const [selectedJobtypes, setSelectedJobtypes] = useState<CheckboxValueType[]>([]);
  const [selectedEducation, setSelectedEducation] = useState<CheckboxValueType[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<CheckboxValueType[]>([]);
  const [selectedSalary, setSelectedSalary] = useState<CheckboxValueType[]>([]);
  const isAuth = useSelector((state:any) => state.isAuth)
  async function checkUser() {
    console.log("Cookie" + cookie.userAccessKey)
    if(cookie.userAccessKey !== "undefined"){
        try{
            const res = await axios.get('http://127.0.0.1:8000/api/me/',{
                headers: {
                  Authorization: `Bearer ${cookie.userAccessKey}`,
                  'Content-Type': 'application/json',
                },
              })
            console.log(res.data)
            dispatch(user_profile(res.data))
            const isauthjson = {
                isAuth:'True',
            }
            dispatch(user_authenticated(isauthjson))
        }
        catch(error){
            console.log("unable to login")
        }
    }
    else{
      router.push('/')
    }
}
  const onChangeType = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Types = ', checkedValues);
    setSelectedJobtypes(checkedValues)
    filteredJobs
  };
  const onChangeEducation = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Education = ', checkedValues);
    setSelectedEducation(checkedValues)
    filteredJobs
  };
  const onChangeTypeExperience = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Experience = ', checkedValues);
    setSelectedExperience(checkedValues)
  };
  const onChangeTypeSalary = (checkedValues: CheckboxValueType[]) => {
    console.log('checked Salary = ', checkedValues);
    setSelectedSalary(checkedValues)
  };
  const getSalaryRange = (salary: string) => {
    const numericSalary = parseFloat(salary);

    if (numericSalary < 50000) {
      return "first";
    } else if (numericSalary < 100000) {
      return "second";
    } else if (numericSalary < 200000) {
      return "third";
    } else {
      return "fourth";
    }
  };
  const filteredJobs = data.filter((job:any) => {
    if (selectedJobtypes.length > 0 && !selectedJobtypes.includes(job.jobType)) {
      return false;
    }
    if (selectedEducation.length > 0 && !selectedEducation.includes(job.education)) {
      return false;
    }
    if (selectedExperience.length > 0 && !selectedExperience.includes(job.experience) ){
      return false;
    }
    if (selectedSalary.length > 0 && !selectedSalary.includes(getSalaryRange(job.salary))){
      return false;
    }
    return true;
  });
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
    checkUser()
    getJobs()
  }, [])
  return (
    <div className="flex flex-row justify-evenly">
      <div>
      <div className='w-48 flex flex-col justify-center'>
        <div className="shadow-md rounded mt-4">
          <p className="text-lg item-center ml-4 font-semibold">Filters</p>
        </div>
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
                <Checkbox value="NO_EXPERIENCE">No Experience</Checkbox>
                <Checkbox value="ONE_YEAR">1 Years</Checkbox>
                <Checkbox value="TWO_YEAR">2 Years</Checkbox>
                <Checkbox value="THREE_YEAR_PLUS">3 Years +</Checkbox>
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
    <div className="w-[56rem]">
    {
      data.length === 0? (
      <>
        <Loading/>
      </>
      ) : (
      <div>
        <div className="shadow-md rounded ml-4 my-4">
          <p className="ml-4 font-semibold">Latest Jobs</p>
        </div>
        <div className="flex flex-col items-center mt-4 h-screen scrollbar-thin scrollbar-thumb-black scrollbar-track-White overflow-y-scroll hover:scrollbar-thumb-black">
        <div className="mt-4">
          {
            filteredJobs.length === 0? (
            <>
              <Image src="/sad.png" alt="Icon" width={300} height={150} />
              <p className="item-center m-8 font-bold text-gray-500">Sorry, we couldn’t find any match</p>
            </>
            ):
            (
            <>
            {
              filteredJobs.map((job:any) => (
                <JobCard
                    key={job.id}
                    jobId={job.id}
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
            </>
            )
            
          }
        </div> 
      </div>
      </div>
      )
    }
    </div>
    
    <div className="flex w-36">

    </div>
      
    </div>
  )
}

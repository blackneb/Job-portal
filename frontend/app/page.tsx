"use client"
import React, { useState,useEffect } from "react"
import JobCard from "@/components/Job/JobCard"
import axios from "axios"
import FilterComponent from "@/components/FilterComponent";
export default function Home() {
  const [data, setData] = useState([]);
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
        <FilterComponent/>
      </div>
    {
      data.length === 0? (
      <>
        Loading...
      </>
      ) : (
      <div className="flex flex-col justify-center">
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
      )
    }
      
    </div>
  )
}

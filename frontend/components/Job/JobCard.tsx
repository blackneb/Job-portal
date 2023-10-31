import React from 'react'

const JobCard = ({ companyName, jobTitle, description, industry, type, salary, expireDate }:any) => {
  return (
    <div className="w-[48rem] rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="mb-2">{companyName}</div>
        <p className="text-gray-700 text-base">{jobTitle}</p>
      </div>
      <div className="px-6 py-4 mb-8">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pb-4 flex bg-gray-800 justify-between items-center">
        <p className="text-white mx-4">{industry}</p>
        <p className="text-white mx-4">{type}</p>
        <p className="text-white text-sm m-4">
          Salary: {salary}
        </p>
        <p className="text-red-500 text-sm">
          Expires on: {expireDate}
        </p>
      </div>
    </div>
  )
}

export default JobCard

import React from 'react'
import Image from 'next/image'

const JobCard = ({ companyName, jobTitle, description, industry, type, salary, expireDate }:any) => {
  return (
    <div className="w-[48rem] rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="mb-2 flex flex-row">
            <Image src="/company.png" alt="Icon" width={20} height={10} />
            <p className='ml-2 text-gray-500'>{companyName}</p>
        </div>
        <div className="mb-2 flex flex-row">
            <Image src="/tag.png" alt="Icon" width={20} height={10} />
            <p className='ml-2'>{jobTitle}</p>
        </div>
        <div className="mb-2 flex flex-row">
            <p className='ml-2 text-xs'>{description.slice(0,240)}...</p>
        </div>
      </div>
      <div className="px-6 py-2 flex bg-gray-100 justify-between items-center">
        <div className="mb-2 flex flex-row">
            <Image src="/industry.png" alt="Icon" width={20} height={10} />
            <p className='ml-2 text-sm'>{industry}</p>
        </div>
        <div className="mb-2 flex flex-row">
            <Image src="/portfolio.png" alt="Icon" width={20} height={10} />
            <p className='ml-2 text-sm'>{type}</p>
        </div>
        <div className="mb-2 flex flex-row">
            <Image src="/salary.png" alt="Icon" width={20} height={10} />
            <p className='ml-2 text-sm'>{salary} Birr</p>
        </div>
        <div className="mb-2 flex flex-row">
            <Image src="/time.png" alt="Icon" width={20} height={10} />
            <p className='ml-2 text-sm'>{expireDate}</p>
        </div>
      </div>
    </div>
  )
}

export default JobCard

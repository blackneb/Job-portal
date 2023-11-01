import JobDetail from '@/components/Job/JobDetail'
import React from 'react'


const page = ({params}:any) => {
  return (
    <div className='flex items-center justify-center'>
        <JobDetail id={params.jobid}/>
    </div>
  )
}

export default page

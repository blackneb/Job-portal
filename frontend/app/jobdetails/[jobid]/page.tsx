'use client'
import JobDetail from '@/components/Job/JobDetail'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

const page = ({params}:any) => {
  const router = useRouter()
  const isAuth = useSelector((state:any) => state.isAuth)
  useEffect(() => {
    if (!isAuth){
      router.push('/login')
    }
  }, [])
  return (
    <div className='flex items-center justify-center'>
      {
        isAuth? (
        <>
          <JobDetail id={params.jobid}/>
        </>
        ):(
        <>
          <p>Loading...</p>
          
        </>
        )
      }
        
    </div>
  )
}

export default page

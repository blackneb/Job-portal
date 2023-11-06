'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Profile from '@/components/Profile'
import UploadResume from '@/components/UploadResume'

const page = () => {
  const router = useRouter()
  const isAuth = useSelector((state:any) => state.userAuth)
  useEffect(() => {
    if (!isAuth.isAuth){
      router.push('/login')
    }
  }, [])
  return (
    <div>
      <UploadResume/>
    </div>
  )
}

export default page

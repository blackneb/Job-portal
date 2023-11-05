'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Profile from '@/components/Profile'

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
        <Profile/>
    </div>
  )
}

export default page

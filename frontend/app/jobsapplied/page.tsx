'use client'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

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
      jobs applied
    </div>
  )
}

export default page

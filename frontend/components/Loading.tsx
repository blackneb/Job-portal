import React from 'react'
import { Spin } from 'antd'
const Loading = () => {
  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
        <Spin size="large" />
      </div>
    </div>
  )
}

export default Loading

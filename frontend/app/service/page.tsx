import React from 'react'

const page = () => {
  return (
    <div className='m-8 h-full'>
       <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-5">Our Services</h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="p-5 border border-gray-200 rounded">
          <h2 className="text-xl font-bold mb-3">Service 1</h2>
          <p>Description of service 1.</p>
        </div>
        <div className="p-5 border border-gray-200 rounded">
          <h2 className="text-xl font-bold mb-3">Service 2</h2>
          <p>Description of service 2.</p>
        </div>
        <div className="p-5 border border-gray-200 rounded">
          <h2 className="text-xl font-bold mb-3">Service 3</h2>
          <p>Description of service 3.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page

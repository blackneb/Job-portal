import React from 'react'

const page = () => {
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
         <div className="w-96 p-6 bg-white shadow-lg rounded-lg">
           <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
           <form>
             <div className="mb-4">
               <label htmlFor="name" className="block mb-1">Name</label>
               <input type="text" id="name" className="w-full border-gray-300 rounded focus:border-blue-500 focus:ring-blue-500" />
             </div>
             <div className="mb-4">
               <label htmlFor="email" className="block mb-1">Email</label>
               <input type="email" id="email" className="w-full border-gray-300 rounded focus:border-blue-500 focus:ring-blue-500" />
             </div>
             <div className="mb-4">
               <label htmlFor="message" className="block mb-1">Message</label>
               <textarea id="message" className="w-full border-gray-300 rounded focus:border-blue-500 focus:ring-blue-500"></textarea>
             </div>
             <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
           </form>
         </div>
       </div>
    </div>
  )
}

export default page

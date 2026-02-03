import React from 'react'
import { Link } from 'react-router-dom'

function BackToHome() {
  return (
   <div className="bg-orange-600 text-white p-5">
         
         <Link to="/" className="ml-4 bg-white text-blue-900 font-bold px-3 py-1 rounded-md hover:bg-gray-200">BackToHome</Link  > 
               </div>
  )
}

export default BackToHome
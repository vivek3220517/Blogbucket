import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="bg-orange-600 text-white p-5">
      
      <Link to="/new" className="ml-4 bg-white text-blue-900 font-bold px-3 py-1 rounded-md hover:bg-gray-200">New Post</Link  > 
            </div>
  )
}

export default Header
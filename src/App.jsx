import { useState } from 'react'
import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'  
import Header from './components/Header.jsx'
import './App.css'
import NewPost from './components/NewPost.jsx'
import BackToHome from './components/BackToHome.jsx'
import AllBlogs from './components/AllBlogs.jsx'
import ViewBlog from './components/ViewBlog.jsx'
import EditBlog from './components/EditBlog.jsx'
const router = createBrowserRouter([
  {path: '/', 
    element: <div><Header />
               <AllBlogs/></div>
  } ,
  {path: '/new', 
    element: <div>
      <BackToHome />
      <NewPost /></div>
  },
 { path : '/blog/:id', 
  element : <div>
    <BackToHome />
    <ViewBlog /></div>}

  , 
  {path:"/edit/:id", element:<EditBlog /> }
]) 


function App() {
  

  return (
    <>
     
    <RouterProvider router={router} />
    
    
    
    </>
  )
}

export default App

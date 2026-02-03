import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../features/blogslice.js'
import { useNavigate } from 'react-router-dom'



function NewPost() {
const navigate = useNavigate();

const [post , setPost] = useState({
  title: "",
  category: "",
  content: ""
})  

const dispatch = useDispatch();

const addHandler = (e) => { 
  e.preventDefault();
  dispatch(addPost(post));
  setPost({title: "", category: "", content: ""});
  navigate('/');
}

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form   className="space-y-4">
        <input 
        required
          type="text" 
          placeholder="Title" 
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input 
        required
          type="text" 
          value={post.category}
          onChange={(e) => setPost({...post, category: e.target.value})}
          placeholder="Category" 
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <textarea 
        required
          placeholder="Content"
          value={post.content} 
          onChange={(e) => setPost({...post, content: e.target.value})} 
          className="w-full p-2 border border-gray-300 rounded-md h-40"
        ></textarea>
        <button 
        onClick={addHandler}
        type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Save Post
        </button>
        <button onClick={() => navigate("/")} className="mt-2 px-4 py-2 ml-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
      </form>
    </div>
  )
}

export default NewPost


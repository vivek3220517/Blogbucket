 
import { useSelector,useDispatch } from 'react-redux'   
import { removePost,editPost } from '../features/blogslice.js'   
import { Link } from 'react-router-dom'
import ViewBlog from './ViewBlog.jsx' 



function AllBlogs() {
  const allPosts = useSelector((state)=>state.blog.posts)
  const dispatch = useDispatch()
  return (
    <>
    <div className="">AllBlogs</div>
    {allPosts.map((post) => (

      <div className='bg-slate-200 p-4 mb-2 rounded shadow-sm' key={post.id}>
        <p className="text-xl font-bold">{post.title}</p>
        <p className="text-gray-700">{post.content}</p>
        <button onClick={() => dispatch(removePost(post.id))} className="mt-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2">Delete</button>
         <Link
  to={`/edit/${post.id}`}
  className="mt-2 px-2 py-1 bg-blue-500 text-white rounded ml-2"
>
  Edit
</Link>

 <Link
  to={`/blog/${post.id}`}
  className="mt-2 px-2 py-1 bg-blue-500 text-white rounded ml-2"
>
  View
</Link>
      </div>
    ))}
    </>
  )
}

export default AllBlogs   
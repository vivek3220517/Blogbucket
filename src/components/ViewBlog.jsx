import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ViewBlog() {
  const { id } = useParams(); // nanoid is a string
  const allPosts = useSelector((state) => state.blog?.posts) // safe access if slice not ready

  // Handle store not ready (e.g., async load)
  if (!allPosts) {
    return <p className="p-4">Loading…</p>
  }

  const currentPost = allPosts.find((post) => String(post.id) === String(id))


  if (!currentPost) {
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Blog not found</h2>
        <p className="mb-3">
          No blog with id <code>{id}</code>.
        </p>
        <Link className="text-blue-600 underline" to="/">Back to Home</Link>
      </div>
    )
  }

  return (
    <>
      <div>ViewBlog </div>
      <div className="bg-slate-200 p-4 mb-2 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-2">{currentPost.title}</h1>
        <h2 className="text-xl font-semibold mb-2">
          Category: {currentPost.category}
        </h2>
        <p className="text-gray-700">{currentPost.content}</p>
      </div>
    </>
  )
}

export default ViewBlog
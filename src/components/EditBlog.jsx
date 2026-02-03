import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "../features/blogslice";
import { useState } from "react";

function EditBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const post = useSelector(state =>
    state.blog.posts.find(p => p.id === id)
  );

  const [title, setTitle] = useState(post.title);
  const [category, setCategory] = useState(post.category);
  const [content, setContent] = useState(post.content);

  const handleSubmit = () => {
    dispatch(editPost({ id, title, category, content }));
    navigate("/");
  };

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Edit Blog Post</h1>
        <h2 className="text-xl font-semibold mb-2">Title</h2>
      <input   required placeholder="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border ml-2 border-gray-300 rounded-md" />

      <h2 className="text-xl font-semibold mb-2 ml-2">Category       </h2>
      <input  required placeholder="category" value={category} onChange={e => setCategory(e.target.value)} className="w-full p-2 border ml-2 border-gray-300 rounded-md mt-2" />

      <h2 className="text-xl font-semibold ml-2 mb-2">Content</h2>
      <textarea required placeholder="content" value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border ml-2 border-gray-300 rounded-md mt-2" />
      <button onClick={handleSubmit} className="mt-2 px-4 py-2 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600">Update</button>
       <button onClick={() => navigate("/")} className="mt-2 px-4 py-2 ml-2 bg-gray-500 text-white rounded hover:bg-gray-600">Cancel</button>
    </div>
  );
}

export default EditBlog;

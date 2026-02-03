
import { createSlice, nanoid } from "@reduxjs/toolkit";


function loadPosts() {
  try {
    const raw = localStorage.getItem("blogPosts");
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed;
  } catch (e) {
    console.warn("Failed to parse blogPosts from localStorage:", e);
    return null;
  }
}

// initial blog i added just for fun
const seedPosts = [
  { id: 1, title: "My First Post", category: "General", content: "This is the content of my first post." },
  { id: 2, title: "My Second Post", category: "Technology", content: "This is the content of my second post." },
  { id: 3, title: "My Third Post", category: "Sports", content: "This is the content of my third post." }
];


const initialState = {
  posts: loadPosts() ?? seedPosts
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addPost: (state, action) => {
      const currBlog = {
        id: nanoid(), 
        title: action.payload.title,
        category: action.payload.category,
        content: action.payload.content
      };
      state.posts.push(currBlog);
    },

    removePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    editPost: (state, action) => {
      const { id, title, category, content } = action.payload;
      const existingPost = state.posts.find(post => post.id === id);    
      if (existingPost) {
        existingPost.title = title;
        existingPost.category = category;
        existingPost.content = content;
      }
    }
  }
});

export const { addPost, removePost,editPost } = blogSlice.actions;
export default blogSlice.reducer;
``
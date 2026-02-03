import {configureStore} from '@reduxjs/toolkit';
import blogReducer from '../features/blogslice.js';

export const store = configureStore({
    reducer:{ 
        blog:blogReducer,},
});

/////

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('blogPosts', JSON.stringify(state.blog.posts));
});

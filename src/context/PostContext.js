"use client";
import React, { createContext, useState } from "react";
import toast from "react-hot-toast";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
    toast.success('Post added successfully');
  };

  const updatePost = (postId, post) => {
    const updatedPosts = posts.map(postItem => {
      if(postItem.id == postId) {
        postItem.title = post.title;
        postItem.description = post.description;
      }

      return postItem;
    });

    setPosts(updatedPosts);
    toast.success('post updated');
  }

  const removePost = (postId) => {
    const filteredPosts = posts.filter(post => post.id != postId);
    setPosts(filteredPosts);
    toast.success('Post removed successfully');
  }

  const postById = (postId) => {
    return posts.find(post => post.id == postId);

  }

  const data = {
    posts, addPost, removePost, postById, updatePost
  }

  return (
    <PostContext.Provider value={data}>
      <div>{children}</div>
    </PostContext.Provider>
  );
};

export default PostProvider;

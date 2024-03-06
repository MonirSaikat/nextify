"use client";
import { PostContext } from "@/context/PostContext";
import React, { useContext, useState } from "react";
import styles from "@/components/posts/posts.module.css";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function Posts() {
  const { posts, removePost, addPost, postById, updatePost } = useContext(PostContext);
  const [title, setTitle]                                     = useState("");
  const [isEdit, setIsEdit]                                   = useState(false);
  const [description, setDescription]                         = useState("");
  const [editId, setEditId]                                   = useState(null);

  const editPost = (postId) => {
    const post = postById(postId);
    setTitle(post.title);
    setIsEdit(true);
    setDescription(post.description);
    setEditId(postId);
  };

  const handleEditPost = e => {
    e.preventDefault();
    updatePost(editId, {title, description});
    setTitle('');
    setDescription('');
    setEditId(null);
    setIsEdit(false);
  }
  
  const handleAddPost = (e) => {
    e.preventDefault();
    if('' == title || '' == description) {
      toast.error('Please enter a title and description');
      return false;
    }
    
    const post = {
      id: Date().toString(),
      title, description
    }

    addPost(post);
    setTitle('');
    setDescription('');
  };

  const initialValues = {
    title: '',
    description: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  }
  
  return (
    <div className={styles.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Title"
            name="title"
          />
          <ErrorMessage name="title" component="div" />
          <textarea
            placeholder="Description"
            name="description"
            className={styles.input}
          ></textarea>
          <ErrorMessage name="description" component="div" />
          <button type="submit" className={styles.button}>
            {isEdit ? "Edit Post" : "Add New Post"}
          </button>
        </Form>
      </Formik>
      <form className={styles.form} onSubmit={isEdit ? handleEditPost : handleAddPost}>
      </form>
      <h1 className={styles.heading}>Posts</h1>

      {posts ? (
        posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.description}</p>
            <button
              className={styles.editButton}
              onClick={() => editPost(post.id)}
            >
              Edit
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => removePost(post.id)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

"use client";
import { PostContext } from "@/context/PostContext";
import React, { useContext, useState } from "react";
import styles from "@/components/posts/posts.module.css";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from 'yup';

export default function Posts() {
  const { posts, removePost, addPost, postById, updatePost } = useContext(PostContext);
  const [editId, setEditId]                                   = useState(null);
  const [postState, setPostState] = useState({
    title: '',
    description: ''
  });

  const editPost = (postId) => {
    const post = postById(postId);
    setPostState({
      title: post?.title,
      description: post?.description
    });
    postById(postId);
    setEditId(postId);
  };

  const handleSubmit = (values, { resetForm }) => {
    const post = {
      id: Date().toString(),
      title: values.title, 
      description: values.description
    }

    if(editId) {
      updatePost(editId, values);
      setPostState({
        title: '',
        description: ''
      });
      setEditId(null);
    } else {
      addPost(post);
    }

    resetForm();
  }

  const postSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required()
  });
  
  return (
    <div className={styles.container}>
      <Formik enableReinitialize initialValues={postState} onSubmit={handleSubmit} validationSchema={postSchema}>
        <Form className={styles.form}>
          <Field
            type="text"
            className={styles.input}
            placeholder="Title"
            name="title" 
          />
          <ErrorMessage name="title" component="div" />
          <Field
            as="textarea"
            placeholder="Description"
            name="description"
            className={styles.input}
          ></Field>
          <ErrorMessage name="description" component="div" />
          <button type="submit" className={styles.button}>
            {editId ? "Edit Post" : "Add New Post"}
          </button>
        </Form>
      </Formik> 
      <h1 className={styles.heading}>Posts</h1>

      {(posts && posts.length) ? (
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

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const EditBlog = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ title: "", content: "" });

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) { 
      console.log('No token found, redirect to login'); 
      navigate("/login");
    }
    axios
      .get(`http://localhost:5000/blogs/blog/${id}`, { headers: { 'x-auth-token': `${token}` }})
      .then((response) => {
        console.table(response.data.data);
        setBlog(response.data.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleList = async () => {
    try {
        
      navigate("/"); // Redirect to the desired page after successful deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); 
    if (!token) { 
      console.log('No token found, redirect to login'); 
      navigate("/login");
    }
    console.log(blog);
    const { title, content } = e.target;
    setBlog({ ...blog, [title]: title, [content]: content });
    
    axios
      .post(`http://localhost:5000/blogs/update/${id}`, blog, { headers: { 'x-auth-token': `${token}` }})
      .then((response) => {
        console.table(response.data.data);
        toast.success('Blog post updated successfully!');
        navigate("/")
      })
      .catch((error) => console.error(error));
  };


  return (
    <div className="container mx-auto bg-white shadow-md rounded px-4 py-4">
      <h2>
        Edit Blog
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end"
          onClick={handleList}
        >
          Blog Lists
        </button>
      </h2>

      <form className="" onSubmit={handleSubmit}>
        <input
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
        name="title"
        value={blog.title}
        onChange={handleChange}
        />
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="content"
        value={blog.content}
        onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlog;

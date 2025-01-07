import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const ViewBlog = () => {
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
        // console.table(response.data.data);
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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token'); 
      if (!token) { 
        console.log('No token found, redirect to login'); 
        navigate("/login");
      }
      await axios.delete(`http://localhost:5000/blogs/delete/${id}`, { headers: { 'x-auth-token': `${token}` }});
      toast.error('Blog post deleted successfully!');
      navigate("/"); // Redirect to the desired page after successful deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(blog);
    // const { title, content } = e.target;
    // setBlog({ ...blog, [title]: title, [content]: content });
    
    // axios
    //   .post(`http://localhost:5000/blogs/update/${id}`, blog)
    //   .then((response) => {
    //     console.table(response.data.data);
    //     navigate("/")
    //   })
    //   .catch((error) => console.error(error));
  };


  return (
    <div className="container mx-auto bg-white shadow-md rounded px-4 py-4">
      <h2>
        View Blog Details
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
          readOnly
        name="title"
        value={blog.title}
        onChange={handleChange}
        />
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="content"
        readOnly
        value={blog.content}
        onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => handleDelete(blog._id)}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default ViewBlog;

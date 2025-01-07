import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found, redirect to login');
      navigate("/login");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); 
    if (!token) { 
      console.log('No token found, redirect to login'); 
      navigate("/login");
    }
    const newBlog = { title, content };

    axios
      .post("http://localhost:5000/blogs/add", newBlog, { headers: { 'x-auth-token': `${token}` }})
      // .then((res) => console.log(res.data));
      .then((response) => {
        // console.table(response.data.data);
        console.table(response);
        toast.success("Blog post added successfully!");
        navigate("/"); // Redirect to the desired page after successful deletion
      })
      .catch((error) => {
        // console.error(error.status);
        if (error.response.status === 401) {
          toast.error("Unauthorized user. Please login.");
          navigate("/login");
        }
      });

    setTitle("");
    setContent("");
  };

  const handleList = async () => {
    try {
      navigate("/"); // Redirect to the desired page after successful deletion
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  return (
    <div className="container mx-auto bg-white shadow-md rounded px-5 py-5">
      <h2>
        Add Blog
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end"
          onClick={handleList}
        >
          Blog Lists
        </button>
      </h2>

      <form className="" onSubmit={onSubmit}>
        <input
          type="text"
          className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="rounded-md bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;

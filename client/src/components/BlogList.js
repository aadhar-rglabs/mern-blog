import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const BlogList = () => {
  const [blogs, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const [id, setEditingId] = useState(null);
  const [title, setEditedTitle] = useState("");
  const [content, setEditedContent] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    axios
      .get("http://localhost:5000/blogs?limit=10")
      .then((response) => {
        // console.table(response.data.data);
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    navigate("/edit/" + id);
  };

  const handleView = (id) => {
    navigate("/view/" + id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/delete/${id}`);
      toast.error('Blog post deleted successfully!');
      // Replace with your actual API endpoint
      navigate("/"); // Redirect to the desired page after successful deletion
    } catch (error) {
      toast.error('Failed to delete blog post.');
      console.error("Error deleting item:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  const handleAdd = async () => {
    try {
      navigate("/add"); // Redirect to the desired page after successful deletion
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle error, e.g., display an error message to the user
    }
  };

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem); // Change page
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="text-3xl font-bold underline ml-8 mb-4">
        Blog List
        <button
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end"
          onClick={handleAdd}
        >
          Add Blog
        </button>
      </h2>
      <br />

      {/* 
      <ul>
        {blogs.map((blog) => (
          <li className="border-b-2 my-2" key={blog._id}>
            <h5>{blog.title}</h5>
            <p>
              {blog.content}
              <i> - {new Date(blog.date).toLocaleDateString()}</i>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end" onClick={() => handleView(blog._id)}>View</button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end" onClick={() => handleEdit(blog._id)}>Edit</button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-4 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end" onClick={() => handleDelete(blog._id)}>Delete</button>
            </p>
          </li>
        ))}
      </ul>
      */}

      <div className="">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Content
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {blogs.map((blog) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={blog._id}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {blog.title}
                      </th>
                      <td className="px-6 py-4">
                          {blog.content}
                      </td>
                  
                      <td className="flex items-center px-6 py-4">
                        <div className="inline-flex rounded-md shadow-sm" role="group">
                          {/*                    
                          <button type="button" onClick={() => handleView(blog._id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                            View
                          </button>
                          <button type="button" onClick={() => handleEdit(blog._id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                            </svg>
                            Edit
                          </button>
                          <button type="button" onClick={() => handleDelete(blog._id)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-e-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                            <svg className="w-3 h-3 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                            </svg>
                            Remove
                          </button> 
                          */}

                           
                            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white" onClick={() => handleView(blog._id)}>View</a>
                            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ms-3" onClick={() => handleEdit(blog._id)}>Edit</a>
                            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white ms-3" onClick={() => handleDelete(blog._id)}>Remove</a>
                      
                        </div>
                      </td>
                  </tr>
                  ))}
              </tbody>
          </table>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={blogs.length}
        paginate={paginate}
      />
    </div>
  );
};

export default BlogList;

================================================
File: /client/README.md
================================================
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


================================================
File: /client/package.json
================================================
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "add": "^2.0.6",
    "axios": "^1.7.9",
    "bootstrap": "^5.3.3",
    "cra-template": "1.2.0",
    "nodemon": "^3.1.9",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.1",
    "react-scripts": "5.0.1",
    "react-toastify": "^11.0.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "web-vitals": "^4.2.4"
  }
}


================================================
File: /client/postcss.config.js
================================================
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}


================================================
File: /client/tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}



================================================
File: /client/.gitignore
================================================
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*

public
package-lock.json

# Editor directories
.idea

================================================
File: /client/src/App.css
================================================
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


================================================
File: /client/src/App.js
================================================
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import Pagination from "./components/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBlog from "./components/ViewBlog";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App container mx-auto px-4 py-4"> <h1 className="text-3xl font-bold underline"></h1>
      <Router>
        <Routes>
          {/* <Route path="/" element={<BlogList />}></Route> */}
          {/* <Route path="/" component={BlogList} exact />
          <Route path="/add" component={AddBlog} /> */}
          <Route exact path='/' element={<BlogList/>}/>
          <Route exact path='/add' element={<AddBlog/>}/>
          <Route exact path='/edit/:id' element={<EditBlog/>}/>
          <Route exact path='/view/:id' element={<ViewBlog/>}/>
          {/* <Route exact path='/edit' element={<UpdateBlog/>}/> */}
          {/* <Route path="/edit/:id" component={EditBlog} /> */}
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;


================================================
File: /client/src/App.test.js
================================================
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


================================================
File: /client/src/index.css
================================================
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
@tailwind base;
@tailwind components;
@tailwind utilities;


.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.page-item {
  margin: 0 5px;
}

.page-link {
  cursor: pointer;
  padding: 8px 16px;
  text-decoration: none;
  color: #007bff;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.page-link:hover {
  background-color: #f1f1f1;
  border-color: #bdbdbd;
}


================================================
File: /client/src/index.js
================================================
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


================================================
File: /client/src/reportWebVitals.js
================================================
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;


================================================
File: /client/src/setupTests.js
================================================
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


================================================
File: /client/src/components/AddBlog.js
================================================
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const newBlog = { title, content };

    axios
      .post("http://localhost:5000/blogs/add", newBlog)
      .then((res) => console.log(res.data));
    toast.success('Blog post added successfully!');
    navigate("/"); // Redirect to the desired page after successful deletion

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
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 float-end"
          onClick={handleList}
        >
          Blog Lists
        </button>
      </h2>

      <form
        className=""
        onSubmit={onSubmit}
      >
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


================================================
File: /client/src/components/BlogList.js
================================================
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


================================================
File: /client/src/components/EditBlog.js
================================================
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
    axios
      .get(`http://localhost:5000/blogs/blog/${id}`)
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
    console.log(blog);
    const { title, content } = e.target;
    setBlog({ ...blog, [title]: title, [content]: content });
    
    axios
      .post(`http://localhost:5000/blogs/update/${id}`, blog)
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


================================================
File: /client/src/components/Pagination.js
================================================
import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;


================================================
File: /client/src/components/ViewBlog.js
================================================
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
    axios
      .get(`http://localhost:5000/blogs/blog/${id}`)
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/blogs/delete/${id}`);
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


================================================
File: /server/package.json
================================================
{
  "name": "mern-blog",
  "version": "1.0.0",
  "description": "Basic MERN CRUD application",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Aadhar gaur",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.7.9",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.9.2",
    "nodemon": "^3.1.9",
    "react-router-dom": "^7.1.1",
    "react-toastify": "^11.0.2"
  }
}


================================================
File: /server/server.js
================================================
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const blogRouter = require('./routes/blogs');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/blogs', blogRouter);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Step-2 : MongoDB database connection established successfully...');
  console.log('\n');
});

app.listen(port, () => {
  console.log('\n');
  console.log(`Step-1 : Server is running on port: ${port}`);
});


================================================
File: /server/.env
================================================
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mernblog

================================================
File: /server/Models/Blog.js
================================================
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;



================================================
File: /server/routes/blogs.js
================================================
const router = require("express").Router();
const Blog = require("../Models/Blog");

// All Blogs
router.route("/").get((req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  Blog.find()
    .sort({ date: -1 })
    .limit(limit)
    .then((blogs) => res.json({"status": 200, "message": "Success!", data: blogs, page, limit}))
    .catch((err) => res.status(400).json({"status": 400, "message": "Error: " + err}));
});


// Add Blog
router.route("/add").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const newBlog = new Blog({ title, content });
  newBlog
    .save()
    .then(() => res.json({"status": 200, "message": "Blog added!"}))
    .catch((err) => res.status(400).json("Error: " + err));
});


// Get Blog
router.route("/blog/:id").get((req, res) => {
  Blog.findById(req.params.id)
    // .then((blog) => res.json(blog))
    .then((blog) => res.json({"status": 200, "message": "Success!", data: blog}))
    .catch((err) => res.status(400).json("Error: " + err));
});


// Update Blog
router.route("/update/:id").post((req, res) => {
  Blog.findById(req.params.id)
    .then((blog) => {
      blog.title = req.body.title;
      blog.content = req.body.content;

      blog
        .save()
        .then(() => res.status(200).json({"status": 200, "message": "Blog updated!"}))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});


// Delete Blog
router.route("/delete/:id").delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json({"status": 200, "message": "Blog deleted."}))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

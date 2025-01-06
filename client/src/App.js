import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import Pagination from "./components/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBlog from "./components/ViewBlog";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// import PrivateRoute from "./components/Auth/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom'; 
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    // 
    <div className="App container mx-auto px-4 py-4"> <h1 className="text-3xl font-bold underline"></h1>
      <AuthProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<BlogList />}></Route> */}
            {/* <Route path="/" component={BlogList} exact />
            <Route path="/add" component={AddBlog} /> */}
            <Route exact path='/' element={<BlogList/>}/>
            <Route exact path='/add' element={<AddBlog/>}/>
            <Route exact path='/edit/:id' element={<EditBlog/>}/>
            <Route exact path='/view/:id' element={<ViewBlog/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
          </Routes>
        </Router>
      </AuthProvider>,
      <ToastContainer />
    </div>
  );
}

export default App;

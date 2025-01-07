import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogList from "./components/Blog/BlogList";
import AddBlog from "./components/Blog/AddBlog";
import EditBlog from "./components/Blog/EditBlog";
import Pagination from "./components/Blog/Pagination";
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewBlog from "./components/Blog/ViewBlog";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// import PrivateRoute from "./components/Auth/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom'; 
import { AuthProvider } from './context/AuthContext';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";


function App() {
  return (
    // 
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <div className="App container mx-auto px-4 py-4">
          <Routes>
            {/* <Route path="/" element={<BlogList />}></Route> */}
            {/* <Route path="/" component={BlogList} exact />
            <Route path="/add" component={AddBlog} /> */}
            {/* <Route exact path='/' element={<BlogList/>}/> */}
            {/* <Route exact path='/dashboard' element={<BlogList/>}/> */}
            <Route exact path='/add' element={<AddBlog/>}/>
            <Route exact path='/edit/:id' element={<EditBlog/>}/>
            <Route exact path='/view/:id' element={<ViewBlog/>}/>
            <Route exact path='/' element={<BlogList/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
          </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>,
      <ToastContainer />
    </div>
  );
}

export default App;

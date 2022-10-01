import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BiArrowBack } from "react-icons/bi";
import "./App.css";
import Post from "./pages/Post";
import Registraion from "./pages/Registraion";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Link to={""}>
        <BiArrowBack style={{ marginRight: 10 }} />
      </Link>
      <Link to={"createpost"}>CreatePost</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registraion />} />
      </Routes>
    </Router>
  );
};

export default App;

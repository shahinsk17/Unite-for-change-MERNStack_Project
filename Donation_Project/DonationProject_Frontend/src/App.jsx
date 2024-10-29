import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Donate from "./components/Donate";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/about" element={<About></About>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>

        <Route path="/donate" element={<Donate></Donate>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
      <ToastContainer position="top-center" />
    </Router>
  );
}

export default App;

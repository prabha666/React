
import React from "react"
import "./App.css"
import Navbar from "./component/Navbar"
import Home from "./component/Home"
import Products from "./component/Products"
import About from "./component/About"
import Product from "./component/Product"
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Switch
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/products/:id" element={<Product />}></Route>
        </Routes>
    </>
  )
}
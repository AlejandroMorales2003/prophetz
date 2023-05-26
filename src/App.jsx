//import styled from 'styled-components'
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import React from "react";
import Productlist from "./pages/Productlist";
import ProductDisplay from "./pages/ProductDisplay";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="/products/:category" element={<Productlist/>}/>
        <Route path="/product/:id" element={<ProductDisplay/>}/>
        <Route path="/cart/:id" element={<Cart/>}/>
        <Route path="/register" element={ user ? <Home/> : <Register/>}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/login" element={user ? <Home/> : <Login/>}/>
      </Routes>
    </Router>
  );
};

export default App;
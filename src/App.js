import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/home'
import NoPage from "./pages/NoPage";
import Link from "./pages/Link";
import Login from "./pages/Login";
import Context from "./Context";
import Register from "./pages/Register";

class App extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
    const url_base='http://localhost/me-link/api/'
    const url = {
      Login:`${url_base}Login.php`,
      register:`${url_base}Register.php`
      };
        return(
          <div >
          <Context.Provider  value={url}>
                  <BrowserRouter>
                 <Routes>
                       <Route path="/" element={<Layout />}>
                           <Route index element={<Home/>}/>
                           <Route path="user/:username" element={<Link/>}/>
                           <Route path="*" element={<NoPage/>}/>
                           <Route path='login' element={<Login/>}/>
                           <Route path='register' element={<Register/>}/>
                       </Route>
                 </Routes>
                 </BrowserRouter>
          </Context.Provider>
      </div>
        )
    }
}
export default App;
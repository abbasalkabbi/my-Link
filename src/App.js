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
import MyProfile from "./pages/MyProfile";
import AddLink from "./pages/AddLink";
import EditLink from "./pages/EditLink";

class App extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
    const url_base='http://localhost/my-link/api/'
    const url = {
      Login:`${url_base}Login.php`,
      register:`${url_base}Register.php`,
      link:`${url_base}link.php?username=`,
      myprofile:`${url_base}MyProfile.php?id=`,
      delete:`${url_base}Delete.php?id=`,
      addlink:`${url_base}AddLink.php`,
      editlink:`${url_base}EditLink.php`,
      getlink:`${url_base}Get_Link.php`,
      };
        return(
          <div >
          <Context.Provider  value={url}>
                  <BrowserRouter>
                 <Routes>
                       <Route path="/" element={<Layout />}>
                           <Route index element={<Home/>}/>
                           <Route path="user/:username" element={<Link/>}/>
                           <Route path="myprofile" element={<MyProfile/>}/>
                           <Route path="addlink" element={<AddLink/>}/>
                           <Route path="editlink/:id" element={<EditLink/>}/>
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
import React from "react";
import { Component } from "react";
import { BrowserRouter, Routes, Route,  } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from './pages/home'
import NoPage from "./pages/NoPage";
import Link from "./pages/Link";



class App extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
    }
    render(){
        return(
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/:username" element={<Link/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        )
    }
}
export default App;
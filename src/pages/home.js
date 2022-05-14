import React from "react";
import { Component } from "react";


class Home extends Component{
    constructor(){
        super()
        this.state={
        }

    }
    render(){
        return(
            <div>
                hi
                {(sessionStorage.getItem('id'))?'r':'f'}
            </div>
        )
    }
}
export default Home;
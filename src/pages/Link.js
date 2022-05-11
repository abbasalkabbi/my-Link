/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";
import LinkItem from '../components/LinkItem'

class Link extends Component{
    constructor(){
        super()
        this.state={
             Links:[],
             finished:false,
             nouser:false,

        }

    }
// created method fetch data from api
   componentDidMount(){
    let {username}=this.props.params
    fetch(`http://localhost/me-link/api/link.php?username=${username}`)
       .then((res)=>res.json())
       .then((json)=>{
           if(json !=false){
            this.setState({
                Links:json,
                finished:true,
            })
           }else{
            this.setState({
                nouser:true,
            })
           }
       })
}
    mapping(){
       if(this.state.finished===true){
         let data=this.state.Links.map(link=>
            <LinkItem name={link.name} url={link.url}/>
            )
            return data
       }else if(this.state.nouser===true){
           let NoUser=<div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
                      No user
                      </div>
           return NoUser;
       }
    }
    render(){
        const {username}=this.props.params
        return(
            <div className="container">
                <div class="d-grid gap-2 col-6 mx-auto">
                    {this.mapping()}
                </div>
            </div>
        )
    }
}
export default (props)=>(
    <Link
    {...props}
    params={useParams()}
    />
);
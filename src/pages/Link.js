/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Component } from "react";
import { useParams } from "react-router-dom";
import LinkItem from '../components/LinkItem'

class Link extends Component{
    constructor(){
        super()
        this.state={
        }

    }
    render(){
        const {username}=this.props.params
        return(
            <div className="container">
                <div class="d-grid gap-2 col-6 mx-auto">
                <LinkItem/>
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
/* eslint-disable import/no-anonymous-default-export */
import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import LinkItem from '../components/LinkItem'
import Context from "../Context";
class Link extends Component{
    constructor(){
        super()
        this.state={
             Links:[],
             finished:false,
            error:false,
            errormsg:'',

        }
        this.mapping=this.mapping.bind(this)

    }
// created method fetch data from api
   componentDidMount(){
    let {username}=this.props.params
    let url_link=this.props.usecontext.link
    fetch(`${url_link}${username}`)
       .then((res)=>res.json())
       .then((json)=>{
           console.log(json)
           if( json.status ==false){
            this.setState({
                error:true,
                errormsg:json.message
            })
           }else{
            this.setState({
                Links:json,
                finished:true
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
       }else if(this.state.error===true){
           let error=<div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
                   {this.state.errormsg}
                      </div>
           return error;
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
    usecontext={useContext(Context)}
    />
);
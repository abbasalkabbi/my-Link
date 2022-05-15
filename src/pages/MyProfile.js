/* eslint-disable import/no-anonymous-default-export */
import { Component,useContext } from "react";
import ListMyLink from "../components/ListMyLink";
import { Navigate } from "react-router";
import Context from "../Context";
class MyProfile extends Component{
  constructor(){
    super()
    this.state={
            links:[],
            finished:false,
            error:false,
            errormsg:'',
    }
  }
     check_login(){
       if(!sessionStorage.getItem('id')){
        return  ( <Navigate replace to="/" />)
       }
     }
     componentDidMount(){
      let id=sessionStorage.getItem('id')
      let url_link=this.props.usecontext.myprofile
      fetch(`${url_link}${id}`)
         .then((res)=>res.json())
         .then((json)=>{
            //  console.log(json)
             if( json.status ==false){
              this.setState({
                  error:true,
                  errormsg:json.message
              })
             }else{
              this.setState({
                  links:json,
                  finished:true
              })
             }
         })
     }
    render(){
      let {links,finished}=this.state
        return(
        <>
        {this.check_login()}
         <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">
            <h4 class="text-center my-3 pb-3">My Links</h4>
                 <div class="d-grid gap-2 col-6 mx-auto">
                       <a href="/addlink"  class="btn btn-outline-dark ms-1" >Add Link</a>
                   </div>
                   {
                     (finished)
                     ? <ListMyLink  links={links}/>
                     :'No Links'
                   }
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
        )
    }
}
export default (props)=>(
  <MyProfile
  {...props}
  usecontext={useContext(Context)}
  />
);
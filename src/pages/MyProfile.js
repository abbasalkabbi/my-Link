import { Component } from "react";
import ListItem from "../components/ListItem";
import ListMyLink from "../components/ListMyLink";

class MyProfile extends Component{
    render(){
        return(
        <>
         <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-lg-9 col-xl-7">
        <div class="card rounded-3">
          <div class="card-body p-4">
            <h4 class="text-center my-3 pb-3">My Links</h4>
                 <div class="d-grid gap-2 col-6 mx-auto">
                       <a href="aa"  class="btn btn-outline-dark ms-1" >Add Link</a>
                   </div>
                 <ListMyLink/>
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
export default MyProfile;
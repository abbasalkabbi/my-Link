import { Component, useContext } from "react";
import Context from "../Context";
import axios from "axios";
class AddLink extends Component{
constructor(){
    super();
    this.state={
        name:'',
        url:'',
    }
    this.info=this.info.bind(this)
}
AddLink(event){
    let url_addlink=this.props.usecontext.addlink
    event.preventDefault();
    let links={
        name: this.state.name,
        url:this.state.url,
        id_user:sessionStorage.getItem('id'),
    }
    axios({
        method: 'post',
        url: `${url_addlink}`,
        headers: { 'content-type': 'application/json' },
        data: links
      }).then(result=>this.setState(
        {
        info: result.data.message,
        status:result.data.status,
        id:result.data.id,
        name:'',
        url:'',

    }))
}
info(){
    
    if(this.state.status ==true){
        return(   
         <div class="alert  alert-success alert-dismissible fade show text-center" role="alert">
            {this.state.info}
         </div>
        )
          
    } if(this.state.status ==false){
        return(  
        <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
        {this.state.info}
        </div>
        )
    }
    
}
render(){
    const  {name,url}=this.state
    return(
    <div className="container d-flex justify-content-center ">
        <form className="mt-1  ">
            <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                  <div className="card-body row  p-5">
                        <h2 className="text-uppercase text-center mb-5"> AddLink </h2>
                        {this.info()}
                             {/* Name */}
                             <div className="mb-3">
                                      <label for="name" className="form-label">Name Your Link</label>
                                      <input type="name" className="form-control" id="name" 
                                         value={name}
                                         onChange={e => this.setState({ name: e.target.value })}
                                         />
                               </div>
                            {/* End Name */}
                            {/* url */}
                            <div className="mb-3">
                                      <label for="url" className="form-label"> Your Link</label>
                                      <input type="url" className="form-control" id="url" 
                                         value={url}
                                         onChange={e => this.setState({ url: e.target.value })}
                                         />
                               </div>
                            {/* End url */}
                            {/* Add Button */}
                            <div class="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" onClick={e => this.AddLink(e)} className="btn btn-primary">Add</button>
                            </div>
                                         {/* END Add Button */}
                  </div>
            </div>
        </form>
    </div>
    )
}
}
export default (props)=>(
    <AddLink
    {...props}
    usecontext={useContext(Context)}
    />
)
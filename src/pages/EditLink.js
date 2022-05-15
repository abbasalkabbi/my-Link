import { Component, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import axios from "axios";
class EditLink extends Component{
constructor(){
    super();
    this.state={
        name:'',
        url:'',
    }
    this.info=this.info.bind(this)
}
EditLink(event){
    let url_editlink=this.props.usecontext.editlink
    event.preventDefault();
    let links={
        id:this.state.id,
        name: this.state.name,
        url:this.state.url,
    }
    axios({
        method: 'post',
        url: `${url_editlink}`,
        headers: { 'content-type': 'application/json' },
        data: links
      }).then(result=> this.setState(
        {
        info: result.data.message,
        status:result.data.status,
    }))
}
componentDidMount(){
    let {id}=this.props.params
    let getlink=this.props.usecontext.getlink
    fetch(`${getlink}?id=${id}`)
       .then((res)=>res.json())
       .then((json)=>{
           console.log(json[0].name)
            this.setState({
                name:json[0].name,
                url:json[0].url,
                id:id,
            })
          
           
       })
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
                            <div class="d-flex  justify-content-around text-lg-start mt-4 pt-2">
                                <button type="submit" onClick={e => this.EditLink(e)} className="btn btn-outline-primary">Update</button>
                                <a href="/myprofile"  className="btn btn-outline-dark">Back</a>
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
    <EditLink
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />
)
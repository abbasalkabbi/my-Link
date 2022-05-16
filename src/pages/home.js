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
            <div className="container">
            {/* titel */}
           <section className="py-5 text-center">
               <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1>
                            My Link 
                        </h1>
                        <p className="lead text-muted"> 
                        allows you to create a personalized and easily customizable page, that houses all the important links you want to share with your audience. It can be used on social platforms like Instagram, TikTok, Twitch, Facebook, YouTube, Twitter, or LinkedIn, or you can use it to aid discovery of your work, brand, or business.
                        </p>
                        {(sessionStorage.getItem('id'))
                        ?<>
                        <a href="/myprofile" type="button" class="btn btn-outline-primary btn-lg me-3 ">My Profile</a>
                        <a href={`/user/${sessionStorage.getItem('username')}`} type="button" class="btn btn-outline-dark btn-lg">My Links</a>
                        </>
                        :<>
                        <a href="/login" type="button" class="btn btn-outline-primary btn-lg me-3 ">Login</a> 
                        <a href="/Register" type="button" class="btn btn-outline-dark btn-lg">Register</a>
                        </>
                        }
                        
                    </div>
               </div>

           </section>
           {/* End Title */}
        </div>
        )
    }
}
export default Home;
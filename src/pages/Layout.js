import { Outlet,NavLink } from "react-router-dom";

const Layout = () => {
  function logout(){
    sessionStorage.removeItem('id');
  }
  return (
    <>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                   <a className="navbar-brand" href="/">
                     BLog
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                   <NavLink
                                          to="/"
                                          className={({isActive})=>(isActive?'nav-link active':'nav-link ')}
                                          >
                                          Home
                                   </NavLink>
                              </li>
                              <li class="nav-item dropdown">
                                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                   Profile
                                   </a>
                                   <ul class="dropdown-menu text-center " aria-labelledby="navbarDropdown">
                                        {(sessionStorage.getItem('id'))
                                        ?<>
                                        <li>
                                                    <NavLink
                                                         to='myprofile'
                                                         className={({ isActive }) => (isActive ? 'dropdown-item disabled' : 'dropdown-item  ')}
                                                    >
                                                         My Profile
                                                    </NavLink>
                                             </li>
                                             <li>
                                                         <button className="dropdown-item " onClick={() => { logout(); window.location.reload(); } }>Log Out</button>
                                             </li>
                                        </>
                                        :
                                        <>
                                        <li>
                                                    <NavLink
                                                         to='login'
                                                         className={({ isActive }) => (isActive ? 'dropdown-item disabled' : 'dropdown-item  ')}
                                                    >
                                                         Login
                                                    </NavLink>
                                             </li>
                                             <li>
                                                    <NavLink
                                                         to='register'
                                                         className={({ isActive }) => (isActive ? 'dropdown-item disabled' : 'dropdown-item  ')}
                                                    >
                                                         Register
                                                    </NavLink>
                                             </li>
                                        </>
                                        }
                                       
                                   </ul>
                              </li>
                        </ul>
                   </div>
            </div>
       </nav>
      <Outlet />
    </>
  )
};

export default  Layout;
/**
 *    <NavLink
             to="/"
             className={({isActive})=>(isActive?'nav-link active':'nav-link ')}
             >
             Home |
             </NavLink>
*/
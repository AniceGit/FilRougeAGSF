import React from "react";
import {SidebarData} from '../components/SidebarData';
import { Link } from "react-router-dom";
import '../styles/SidebarStyle.css';

 
function Sidebar () {
    //map through sidebardata array 
    return(
    <div>
        <nav className="navbar  fixed-top flex-md-nowrap p-0">
        <Link to='/Main' style={{ textDecoration: 'none', margin: 0}}> <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="!#" >AGSF|DEV</a> </Link>
            <input type="text" className="form-control " placeholder="Search..." />
            <ul className="col-auto navBar">
                <li className="list-inline-item">
                   <Link to='/SignIn' style={{ textDecoration: 'none' }}><a className="nav-link" href="!#">Sign In</a></Link> 
                </li>
                <li className="list-inline-item ">
                <Link to='/SignUp' style={{ textDecoration: 'none' }}><a className="nav-link" href="!#">Sign Up</a></Link> 
                </li>
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div class="col-md-2  d-none d-md-block sidebar">
                    <div class="left-sidebar">
                        <ul class="nav flex-column sidebar-nav">
                        {SidebarData.map((val,key)=>
                {
                    //put onClick function te be redirected to the link value in sidebarData
                    // adding id to icon and title value to divide them using css
                    return <li key={key} className="nav-item" id={window.location.pathname === val.link ? "active" : "" } onClick={()=> {window.location.pathname = val.link}}> {" "}
                    
                        {/* <div className="bi bi-chevron-right">{val.icon}</div> {" "} */}
                        <div className="nav-link">{val.title}</div>
                    </li>; 
                }
                    
                )}
 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  </div>
    )}
export default Sidebar;
import React from "react";
import {SidebarData} from './SidebarData';
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoAGSFDark from '../img/LogoAGSFDark.png';
import Avatar from '../img/Avatar.png'
import '../styles/SidebarStyle.css';



function Sidebar () {

    const [IsLoggedState,SetIsLogged] = useState(true);

    // const LoggedFunction = () => {
    //     SetIsLogged(!IsLoggedState);
    // }
    //map through sidebardata array 
    return(
    <div>
        <nav className="navbar  fixed-top flex-md-nowrap p-0">
        <Link to='/Main' style={{ textDecoration: 'none', margin: 0}}><a className="navbar-brand col-sm-3 col-md-2 mr-0" href="!#" ><img className="logo" src={LogoAGSFDark} alt="" /></a></Link>
            <input type="text" className="form-control " placeholder="Search..." />
            <ul className="col-auto navBar">
                {(function(){
                    if(IsLoggedState){
                        return(
                        <div>
                            <li className="list-inline-item">
                                <Link to='/Profil' style={{ textDecoration: 'none' }}><a style={{ borderBottom: 'none' }} className="nav-link" href="!#"><img className="avatar" src={Avatar} alt="" /></a></Link> 
                            </li>
                            <li className="list-inline-item">
                                <Link to='/SignIn' style={{ textDecoration: 'none' }}><a className="nav-link" href="!#">Logout</a></Link> 
                            </li>
                        </div>)
                    }else{
                        return(<li className="list-inline-item ">
                        <Link to='/Main' style={{ textDecoration: 'none' }}><a className="nav-link" href="!#">Login</a></Link> 
                        </li>)
                    }
                })()} 
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2  d-none d-md-block sidebar">
                    <div className="left-sidebar">
                        <ul className="nav flex-column sidebar-nav">
                        {SidebarData.map((val,key)=>
                {
                    //put onClick function te be redirected to the link value in sidebarData
                    // adding id to icon and title value to divide them using css
                    return <li key={key} className="nav-item" id={window.location.pathname === val.link ? "active" : "" } onClick={()=> {window.location.pathname = val.link}}> {" "}
                    
                        <div className="icon">{val.icon}</div> {" "} 
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
import React from "react";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";
import Tags from "./Tags";

function Main (){
    return(
        <div className="container-fluid">       
        <Sidebar/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 m-7 px-5 main">
        <h3>Tags</h3>
        <Tags/>
        <Footer/>
        </main>
        </div>
    )
}

export default Main;
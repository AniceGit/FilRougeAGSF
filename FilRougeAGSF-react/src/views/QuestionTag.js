import React from "react";
import Footer from "../components/Footer";
import QuestionPage from "../components/QuestionPage";
import Sidebar from "../components/Sidebar";

function QuestionTag(){
    return(
        <div className="container-fluid">       
        <Sidebar/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 m-7 px-5 main">
        <h3>Question Tag</h3>
        <QuestionPage/>
        <Footer/>
        </main>
        </div>
    )
}

export default QuestionTag;
import Footer from "../components/Footer";
import PageQuestion from "../components/PageQuestion";
import Sidebar from "./Sidebar";

function Question(){
    return(
        <div className="container-fluid">       
        <Sidebar/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 m-7 px-5 main">
        <h3>Questions</h3>
        <PageQuestion/>
        <Footer/>
        </main>
        </div>
    )
}

export default Question;
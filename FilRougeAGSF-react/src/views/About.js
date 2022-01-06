import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";

function About (){
    return(
        <div className="container-fluid">       
        <Sidebar/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 m-7 px-5 main">
        <h3>About</h3>
        <AboutContent/>
        <Footer/>
        </main>
        </div>
    )
}

export default About;
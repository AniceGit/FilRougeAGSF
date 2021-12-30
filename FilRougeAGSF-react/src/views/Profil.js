import Footer from "../components/Footer";
import FormProfil from "../components/FormProfil";
import Sidebar from "./Sidebar";

function Profil (){
    return(
        <div className="container-fluid">       
        <Sidebar/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 m-7 px-5 main">
        <h3>Mon Profil</h3>
        <FormProfil/>
        <Footer/>
        </main>
        </div>
    )
}

export default Profil;
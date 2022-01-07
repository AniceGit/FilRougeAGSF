import Footer from "../components/Footer";
import FormQuestion from "../components/FormQuestion";
import Sidebar from "./Sidebar";

function FormulaireQuestion(){
    return(
        <div className="container-fluid">       
        <Sidebar/>
        <main role="main" class="col-md-12 ml-sm-auto col-lg-9 m-7 px-5 main">
        <h3>Formulaire question</h3>
        <FormQuestion/>
        <Footer/>
        </main>
        </div>
    )
}

export default FormulaireQuestion;
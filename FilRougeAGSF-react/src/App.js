import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Tags from './views/Tags';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Main from './views/Main';
import Profil from './views/Profil';
import About from './views/About';
import FormulaireQuestion from './views/FormulaireQuestion';
import Question from './views/Question';



function App() {
  return (
    <Router>
    <div className="App">
       {/* <Main/>  */}
      {/* <Cours/> */}
      {/* <Footer/> */}
    
    <Switch>

          <Route path="/Tags">
            <Tags />
          </Route>

          <Route path="/About">
            <About/>
          </Route>

          <Route path="/Signin">
            <SignIn />
          </Route>

          <Route path="/Signup">
            <SignUp />
          </Route>

          <Route path="/Profil">
            <Profil />
          </Route>

          <Route path="/FormulaireQuestion">
            <FormulaireQuestion/>
          </Route>

          <Route path="/Question">
            <Question/>
          </Route>

          <Route path="/">
            <Main />
          </Route>

        </Switch>
        </div>
    </Router>
  );
}

export default App;

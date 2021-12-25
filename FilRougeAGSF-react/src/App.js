import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Cours from './Views/Themes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Tags from './views/Tags';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Home from './views/Home';

function App() {
  return (
    <Router>
    <div className="App">
      {/* <Header/> */}
      {/* <Cours/> */}
      {/* <Footer/> */}
    
    <Switch>

          <Route path="/Tags">
            <Tags />
          </Route>

          <Route path="/Signin">
            <SignIn />
          </Route>

          <Route path="/Signup">
            <SignUp />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
        </div>
    </Router>
  );
}

export default App;

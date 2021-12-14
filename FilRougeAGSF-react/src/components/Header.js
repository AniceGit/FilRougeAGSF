import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Themes from "../views/Themes";
import Home from "../views/Home";
import '../styles/Header.css';

function Header() {


  let linkClassName = 'nav-link';


  function addActive() {
    linkClassName += 'active';
  }



  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="!#">Menu</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={linkClassName} aria-current="page" to="/" onclick={addActive}>Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link className={linkClassName} to="/themes" onclick={addActive}>Thèmes</Link>
                </li>
                <li className="nav-item">
                  <a className={linkClassName} href="!#" onclick={addActive}>Canaux</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              {/* <!-- Avatar -->
              <a
                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="!#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  class="rounded-circle"
                  height="25"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
                style={{position:relative !important}}
              >
                <li>
                  <a class="dropdown-item" href="!#">My profile</a>
                </li>
                <li>
                  <a class="dropdown-item" href="!#">Settings</a>
                </li>
                <li>
                  <a class="dropdown-item" href="!#">Logout</a>
                </li>
              </ul> */}

              <div class="d-flex align-items-center">
                <button type="button" class="btn btn-link px-3 me-2 hover-button" style={{textDecoration: 'none', color:'white'} }>
                  Login
                </button>
                <button type="button" class="btn btn-success me-3">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </nav>

        <Switch>

          <Route path="/themes">
            <Themes />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>


      </div>
    </Router>
  )
}

export default Header;



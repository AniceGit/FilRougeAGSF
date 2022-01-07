import '../styles/Tags.css';
import { Link } from "react-router-dom";
import React from 'react';

function PageQuestion() {
  return (

<div className='container'>
 <div>
 <Link to='/FormulaireQuestion'><button className='button'> Ajouter une question </button></Link>
  </div>     
  <Link to='/QuestionTag' style={{ textDecoration: 'none', color: '#707070'}}>
    <div class="row">
        <div class="col-sm-11">
          <div class="card">
          <div className="card-header">.NET</div>
            <div class="card-body">
              <h5 class="card-title">.NET</h5>
              <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea dignissimos eaque vel! Odit distinctio alias architecto aliquam amet soluta, incidunt exercitationem delectus, quis officia unde qui. Minima ea quisquam voluptas.</p>
            </div>
            <div className="card-footer text-muted">Il y a 2 jours</div>
          </div>
        </div>
    </div>
    </Link>


    </div>

  )
}

export default PageQuestion;
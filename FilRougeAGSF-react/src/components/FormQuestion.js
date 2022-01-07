import React from "react";
import { Link } from "react-router-dom";
import '../styles/Profil.css';

function FormQuestion () {
    return(
        <div>            
            <div className="wrapperForm ">
                <div className="form ">
                    <form action="">
                        <label htmlFor="Question">
                            Question :
                            <input type="text" className="input" placeholder="Enter sujet" />
                        </label>
                        <textarea type="text" className="input" placeholder="Veuillez saisir le detail de votre question" />
                        <div>
                            <Link to='/Question'><button className="button" type="submit"><span>Valider</span></button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormQuestion;
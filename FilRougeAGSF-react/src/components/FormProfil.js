import React from "react";
import { Link } from "react-router-dom";
import Avatar from '../img/Avatar.png';
import UserOutlined  from '@ant-design/icons';
import '../styles/Profil.css';

function FormProfil () {
    return(
        <div>            
            <img className="avatar" src={Avatar} alt="" />
            <div className="wrapperForm ">
                <div className="form ">
                    <form action="">
                    <UserOutlined /><input type="text" className="input" placeholder="Jane Doe" />
                        <i className="fa fa-envelope"></i><input type="email" className="input" placeholder="JDoe@gmail.com" />
                        <i className="fa fa-lock"></i><input type="password" className="input" placeholder="**********" />
                        <div>
                            <Link to='/Main'><button className="button" type="submit"><span>Valider</span></button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default FormProfil;
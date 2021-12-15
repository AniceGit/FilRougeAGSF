import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/FormStyle.css';

const SignIn = () => {

    const [username,setUsername] = useState('');
    // const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    


    return(
        <div className="wrapperForm signin">
            <div className="form in">
            <h1 className="title">Sign In</h1>
                <form action="">
                <i className="fa fa-user"></i><input type="text" className="input" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    {/* <input type="email" className="input" placeholder="Enter your email adress" value={email} onChange={(e) => setEmail(e.target.value)} required /> */}
                    <i className="fa fa-lock"></i><input type="password" className="input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <div>
                        <Link to='/ChatPage'><button className="button" type="submit"><span>Sign In</span></button></Link>
                    </div>
                    <div>
                    <Link to='/Signup'> Not register yet ?</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignIn;
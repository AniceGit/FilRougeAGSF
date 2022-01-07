import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/FormStyle.css';

const SignUp = () => {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [repeatpassword,setRepeatPassword] = useState('');
    const [avatar,setAvatar] = useState('');


    return(
        <div className="wrapperForm signup">
            <div className="form up">
                <h1 className="title">Sign Up</h1>
                <form action="">
                    <input type="text" className="input" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input type="email" className="input" placeholder="Enter your email adress" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" className="input" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input type="password" className="input" placeholder="Enter your password" value={repeatpassword} onChange={(e) => setRepeatPassword(e.target.value)} required />
                    <input type="file" className="input"  value={avatar} onChange={(e) => setAvatar(e.target.value)} required />
                    <div>
                        <Link to='/Signin'><button className="button" type="submit"><span>Sign Up</span></button></Link>
                    </div>
                    <div>
                    <Link to='Signin'> Already an account ?</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignUp;
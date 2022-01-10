import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/FormStyle.css';
import axios from 'axios';
import { Redirect } from 'react-router';

export default class SignUp extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        avatar: '',
    };

    handleChangeUserName = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleChangeEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleChangeAvatar = event => {
        this.setState({
            avatar: event.target.value
        })
    }


    handleSubmit = event => {
        return new Promise((onSuccess, onFail) => {
            event.preventDefault()

            // const user = {
            //     username: this.state.username,
            //     email: this.state.email,
            //     password: this.state.password,
            //     avatar: this.state.avatar
            // }

            let formData = new FormData();
            formData.append("username", this.state.username);
            formData.append("email", this.state.email);
            formData.append("password", this.state.password);
            formData.append("avatar", this.state.avatar);

            axios.post('http://localhost:58516/api/users/register', formData)
                .then((res, err) => {
                    if (!res || err) {
                        return onFail(`Response failure : ${err}`)
                    }
                    onSuccess(res)
                    console.log(res);
                    console.log(res.data);
                })
                .then(() => this.setState({ redirect: true}))
        })
    }




    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/Signin" />;
        }
        return (
            <div className="wrapperForm signup">
                <div className="form up">
                    <h1 className="title">Sign Up</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="username" className="input" placeholder="Enter your username" onChange={this.handleChangeUserName} required />
                        <input type="email" name="email" className="input" placeholder="Enter your email adress" onChange={this.handleChangeEmail} required />
                        <input type="password" name="password" className="input" placeholder="Enter your password" onChange={this.handleChangePassword} required />
                        {/* <input type="password" className="input" placeholder="Enter your password" value={repeatpassword} onChange={(e) => setRepeatPassword(e.target.value)} required /> */}
                        <input type="file" name="avatar" className="input" onChange={this.handleChangeAvatar} required />
                        <div>
                            <Link to='/Signin'><button className="button" onClick={this.handleSubmit} type="submit"><span>Sign Up</span></button></Link>
                        </div>
                        <div>
                            <Link to='Signin'> Already an account ?</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
//export default SignUp;

import React, { useState } from 'react'
import '../styles/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = event => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push("/");
        })
        .catch(error => alert(error.message));
    }

    const register = event => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push("/");
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="LoginIn Visual"
                    className="login_logo" />
            </Link>

            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input onChange={event => setPassword(event.target.value)} value={password} type="password" />
                    <button type="submit" onClick={login} className="login_SignInButton">Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button onClick={register} className="login_RegisterButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;

import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    console.log(user);

    const { signInUsingGoogle, } = useAuth();
    const auth = getAuth()

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'


    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleRegistration = e => {
        console.log(email, password)
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                history.push(redirect_uri);
                setUserName()
            })
    }

    return (
        <div>
            <body class="text-center  login">
                <div class="form-signin bg-light">
                    <div>
                        <img class="mb-4" src="https://i.ibb.co/hZ1zdXy/logo-3.png" alt="" width="120" />
                        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                        <div class="form-floating">
                            <input onBlur={handleNameChange} type="text" class="form-control" id="floatingInput" placeholder="Full Nmae" />
                            <label for="floatingInput">Full Name</label>
                        </div>
                        <div class="form-floating">
                            <input onBlur={handleEmailChange} type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input onBlur={handlePasswordChange} type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>

                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-dark" type="submit" onClick={handleRegistration}>Register</button>
                        <button onClick={handleGoogleLogin} class="w-100 btn btn-lg btn-warning mt-3" type="submit">Google</button>
                        <button class="w-100 btn btn-lg btn-primary mt-3" type="submit" >Facebook</button>
                        <div className="mt-3">You alrady have an account?<Link to="/login">Login</Link></div>

                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
                    </div>
                </div>


            </body>
        </div>
    );
};

export default Register;
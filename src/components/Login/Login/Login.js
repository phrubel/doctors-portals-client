import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import loginSide from '../../../images/login-side.png'



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };



    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
            const { displayName, email } = result.user;
            const signInUser = { name: displayName, email }
            setLoggedInUser(signInUser)
            storeAuthToken()

        }).catch((error) => {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
            }).catch(function (error) {
                // Handle error
            });

    }


    return (
        <div className='login-page container'>
            <div className="row align-items-center" style={{ height:"100vh"}}>
                <div className="col-md-5 shadow p-5">
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className='btn btn-brand' onClick={handleGoogleSignIn}>Google Sign in</button>
                    </div>
                </div>
                <div className="col-md-7 d-none d-md-block align-self-end">
                    <img className='img-fluid' src={loginSide} alt=""/>
                </div>
            </div>
        </div>
    );
};
export default Login;
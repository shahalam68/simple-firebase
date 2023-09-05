import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';
const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider;
    const gitHubProvider = new GithubAuthProvider;


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGitHubSignIn = () => {
        signInWithPopup(auth,gitHubProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>

            {
                user ?

                    <button onClick={handleSignOut}>SignOut</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Google login</button>
                        <button onClick={handleGitHubSignIn}>GitHub Login </button>
                    </>
            }
            {
                user && <div>
                    <h3>User:{user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login; <h2>login</h2>
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

const auth = getAuth(app);


const Login = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        //console.log(form);

        const email = event.target.email.value;
        //console.log(email);
        const password = event.target.password.value;
        //console.log(password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(user);
                form.reset(); //empty form

            })
            .catch((error) => {
                console.log(error);
            });



    }
    const handleOnBlurr = event => {
        const email = event.target.value;
        setUserEmail(email);
        //console.log(email);


    }
    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please Give us your email address');
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                // Password reset email sent!
                alert(`Password reset link sent at ${userEmail}`)
            })
            .catch((error) => {
                console.log(error);
            });



    }


    return (
        <div className='w-50 mx-auto shadow p-4'>
            <h2 className='text-center'> Log In Here!</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleOnBlurr} type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {
                    <p className='text-danger my-2'>{ }</p>
                }
                {
                    success && <p className='text-success'>Log In Successfully</p>
                }

                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <p><small>Forget Password? <button onClick={handleForgetPassword} className="btn btn-link">Reset Password</button></small></p>
            </Form>


        </div>
    );
};

export default Login;
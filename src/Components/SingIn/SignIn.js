import React, { useState } from 'react';
import './SignIn.scss';
import FormInput from '../Form-input/FormInput';
import CustonButton from '../Custom-button/CustonButton';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';

const SignIn = () => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setCredentials({ email: '', password: '' })
        }
        catch (error) {
            console.error(error);
        }
    }
    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }
    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    handleChange={handleChange}
                    type='email'
                    name='email'
                    label='email'
                    value={email}
                    required />

                <FormInput
                    handleChange={handleChange}
                    type='password'
                    name='password'
                    label='password'
                    value={password}
                    required />
                <div className="buttons">
                    <CustonButton type='submit'>Sign In</CustonButton>
                    <CustonButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustonButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;

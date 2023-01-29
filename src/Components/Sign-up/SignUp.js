import React, { useState } from 'react';
import './SignUp.scss';
import { auth, createUserProfileDocument } from '../../Firebase/Firebase.utils';
import FormInput from '../Form-input/FormInput';
import CustonButton from '../Custom-button/CustonButton';

export default function SignUp() {
    const userDetails = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [state, setState] = useState(userDetails);
    const { displayName, email, password, confirmPassword } = state;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try {
            const { user } = auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, { displayName });
            setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.error(error);
        }
    };
    const handleChange = event => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    }
    return (
        <div>
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={handleChange}
                        label='Display Name'
                        required />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={handleChange}
                        label='Email'
                        required />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required />
                    <CustonButton type='submit'>SIGN UP</CustonButton>
                </form>
            </div>

        </div>
    )
}

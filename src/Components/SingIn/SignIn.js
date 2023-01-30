import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../Form-input/FormInput';
import CustonButton from '../Custom-button/CustonButton';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';

export default class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }

    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        }
        catch (error) {
            console.error(error);
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        handleChange={this.handleChange}
                        type='email'
                        name='email'
                        label='email'
                        value={this.state.email}
                        required />

                    <FormInput
                        handleChange={this.handleChange}
                        type='password'
                        name='password'
                        label='password'
                        value={this.state.password}
                        required />
                    <div className="buttons">
                        <CustonButton type='submit'>Sign In</CustonButton>
                        <CustonButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustonButton>
                    </div>

                </form>
            </div>
        )
    }
}

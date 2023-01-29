import React from 'react';
import SignUp from '../../Components/Sign-up/SignUp';
import SignIn from '../../Components/SingIn/SignIn';
import './SignInAndSignUpPage.scss';

export default function SignInAndSignUpPage() {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

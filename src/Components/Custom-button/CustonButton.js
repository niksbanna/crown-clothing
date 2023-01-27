import React from 'react';
import './CustonButton.scss';

export default function CustonButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps} >
            {children}
        </button>
    )
}

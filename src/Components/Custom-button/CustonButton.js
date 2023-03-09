import React from 'react';
import './CustonButton.scss';

export default function CustonButton({ children, inverted, isGoogleSignIn, ...otherProps }) {
    return (
        <button className={`${inverted ? 'inverted' : ''}
         ${isGoogleSignIn ? 'google-sign-in' : ''}
          custom-button`} {...otherProps} >
            {children}
        </button>
    )
}

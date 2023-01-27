import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { ReactComponent as Logo } from '../../Assests/084 crown.svg';
import { auth } from '../../Firebase/Firebase.utils';

export default function Header({ currentUser }) {
    return (
        <div className='header'>
            <Link to='/' className='logo-container' >
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => { auth.signOut(); }}>
                            SIGN OUT
                        </div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>

                }
            </div>
        </div>
    )
}

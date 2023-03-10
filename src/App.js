import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';

import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up-page/SignInAndSignUpPage';
import Checkout from './Pages/Checkout/Checkout';

import { auth, createUserProfileDocument } from './Firebase/Firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/UserActions';

class App extends Component {

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/shop' element={<Shop />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route
            exact path='/signin'
            element={
              this.props.currentUser ? (
                <Navigate to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Routes>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);



import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Shop from './Pages/Shop/Shop';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-up-page/SignInAndSignUpPage';
import { auth } from './Firebase/Firebase.utils';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const unSubscribeFromAuth = useRef(null);

  useEffect(() => {
    unSubscribeFromAuth.current = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
      console.log(unSubscribeFromAuth);
    })
    return () => { unSubscribeFromAuth.current() };
  }, [currentUser]);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
      </Routes>

    </div>
  );
}

export default App;
